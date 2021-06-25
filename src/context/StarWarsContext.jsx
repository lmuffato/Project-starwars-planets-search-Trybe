import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchDataFromStarWarsAPI, {
  dataWithoutResidents,
} from '../services/starwarsAPI';

export const StarWarsContext = createContext({});

export function StarWarsContextProvider({ children }) {
  const [swPlanets, setSWPlanets] = useState([]); // array inicial com todos os planetas da API
  const [isLoading, setLoading] = useState(true); // loading do fetch
  const [filterByOtherParams, setFilterByOtherParams] = useState([]); // filtros numéricos e outros
  const [inputValue, setInputValue] = useState('');
  const [newArrayOfPlanets, setNewArrayOfPlanets] = useState([]); // novo array com filtros aplicados

  // Filtra planetas por nome
  const filteredPlanets = (inputVal) => {
    setNewArrayOfPlanets(
      swPlanets.filter((planet) => (
        planet.name.toLowerCase().includes(inputVal.toLowerCase())
      )),
    );
  };

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

  const filteringByDifferentParams = (arrOfResults) => {
    const filteredArr = [...arrOfResults];
    if (filterByOtherParams.length !== 0) {
      filterByOtherParams.forEach((planet) => {
        const { column, comparisonType, value } = planet;
        comparingTypes(comparisonType, filteredArr, value, column);
      });
    }
    return filteredArr;
  };

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
  }, []);

  const contextVal = {
    data: swPlanets,
    filters: {
      filterByName: {
        name: '',
      },
    },
    setSWPlanets,
    isLoading,
    inputValue,
    newArrayOfPlanets,
    filterByOtherParams,
    setInputValue,
    filteredPlanets,
    setFilterByOtherParams,
  };

  // const filtersByOtherParams = () => {

  // };

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
