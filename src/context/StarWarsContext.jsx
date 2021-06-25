import React, { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import fetchDataFromStarWarsAPI, {
  dataWithoutResidents,
} from '../services/starwarsAPI';
// import { optionsColumn } from '../services/data';

export const StarWarsContext = createContext({});

export function StarWarsContextProvider({ children }) {
  const [swPlanets, setSWPlanets] = useState([]); // array inicial com todos os planetas da API
  const [isLoading, setLoading] = useState(true); // loading do fetch
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByOtherParams, setFilterByOtherParams] = useState([]); // filtros numéricos e outros
  const [inputValue, setInputValue] = useState('');
  const [newArrayOfPlanets, setNewArrayOfPlanets] = useState([]); // novo array com filtros aplicados
  const [isSorted, setIsSorted] = useState(false);
  const [sortSelectColumn, setSortColumn] = useState('name');
  const [sorting, setSorting] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [filters, setFilters] = useState({
    filterByName,
    filtersByNumericValues: [],
    order: sorting,
  });

  // Filtra planetas por nome
  const filteredPlanets = (inputVal) => {
    setNewArrayOfPlanets(
      swPlanets.filter((planet) => (
        planet.name.toLowerCase().includes(inputVal.toLowerCase()))),
    );
  };

  // Filtra planetas por operadores de comparação
  const comparingTypes = (typeOfComparison, filteredArr, value, column) => {
    let arr = filteredArr;
    switch (typeOfComparison) {
    case 'maior que':
      arr = arr.filter((sPlanet) => Number(sPlanet[column]) > Number(value));
      break;
    case 'menor que':
      arr = arr.filter((sPlanet) => Number(sPlanet[column] < Number(value)));
      break;
    case 'igual a':
      arr = arr.filter((sPlanet) => Number(sPlanet[column] === Number(value)));
      break;
    default:
      console.log('help');
    }
    return arr;
  };

  // Filtra por ordem - crescente ou ascendente -- incluir referências
  const sortingArray = (planetTable) => {
    const sortColumn = filters.order.column;
    const isItAString = !parseInt(planetTable[0][sortColumn], 10);
    const isAscendant = filters.order.sort === 'ASC';
    const POSITIVE = 1;
    const NEGATIVE = -1;
    const order = isAscendant ? POSITIVE : NEGATIVE;

    return planetTable.sort((a, b) => (
      isItAString ? (a[sortColumn].localeCompare(b[sortColumn])) * order
        : (a[sortColumn] - b[sortColumn]) * order));
  };

  const filteringByDifferentParams = useCallback(
    (arrOfResults) => {
      const filteredArr = [...arrOfResults];
      if (filterByOtherParams.length !== 0) {
        filterByOtherParams.forEach((planet) => {
          const { column, comparison, value } = planet;
          comparingTypes(comparison, filteredArr, value, column);
        });
      }
      // sortingArray(filteredArr);
      setNewArrayOfPlanets(filteredArr);
    },
    [filterByOtherParams],
  );

  useEffect(() => {
    async function tryFetch() {
      const planets = await fetchDataFromStarWarsAPI();
      dataWithoutResidents(planets.results);
      setSWPlanets(planets.results);
      filteringByDifferentParams(planets.results);
      setLoading(false);
      console.log(planets.results);
    }
    tryFetch();
  }, [filteringByDifferentParams]);

  const contextVal = {
    data: swPlanets,
    filters,
    setSWPlanets,
    isLoading,
    inputValue,
    newArrayOfPlanets,
    filterByOtherParams,
    setSorting,
    setFilterByName,
    setFilters,
    setInputValue,
    filteredPlanets,
    sortingArray,
    setFilterByOtherParams,
    isSorted,
    setIsSorted,
    sortSelectColumn,
    setSortColumn,
  };

  return (
    <StarWarsContext.Provider value={ contextVal }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// https://fb.me/react-hooks-data-fetching
// https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback
