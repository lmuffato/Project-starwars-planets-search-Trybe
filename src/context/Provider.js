import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import getStarWarsAPI from '../services/getStarWarsAPI';
import Context from './Context';
// Requisito 03 realizado com ajuda de Pollyana Oliveira Turma 10A e Adão Benites Jr turma 10B
function Provider({ children }) {
  const [dataApi, setDataApi] = useState([]);
  const [tableHeader, setTableHeader] = useState([]);
  const [filteredPlanet, setFilteredPlanet] = useState([]);
  const [filters, setFilters] = useState({
    columnFilter: 'population',
    comparisonFilter: 'maior que',
    valueFilter: '',
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const fetch = async () => {
      const results = await getStarWarsAPI();
      setDataApi(results);
      setFilteredPlanet(results);
    };
    fetch();
  }, []);

  useEffect(() => {
    if (dataApi.length > 0) {
      const headers = Object.keys(dataApi[0])
        .filter((header) => header !== 'residents');
      setTableHeader(headers);
    }
  }, [dataApi]);

  const filtersValueFunc = () => {
    const { columnFilter, comparisonFilter, valueFilter } = filters;
    const filterByValue = filteredPlanet.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return Number(planet[columnFilter]) > Number(valueFilter);
      } if (comparisonFilter === 'menor que') {
        return Number(planet[columnFilter]) < Number(valueFilter);
      } return Number(planet[columnFilter]) === Number(valueFilter);
    });
    return setFilteredPlanet(filterByValue);
  };

  const handlePlanetFiltered = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    const searchedPlanet = dataApi.filter((planet) => planet.name.includes(value));
    setFilteredPlanet(searchedPlanet);
  };

  const handleSelectChange = ({ target }) => {
    setFilters({ ...filters, [target.name]: target.value });
  };

  const handleSubmitFilter = () => {
    const {
      filterByNumericValues,
      columnFilter,
      comparisonFilter,
      valueFilter } = filters;
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    });
    filtersValueFunc();
  };

  const contextValue = {
    tableHeader,
    setFilters,
    filteredPlanet,
    handleSelectChange,
    handleSubmitFilter,
    handlePlanetFiltered,
    filters,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: object,
}.isRequired;

export default Provider;

// useEffect(() => {
//   getStarWarsAPI().then((results) => setDataApi(results));
// }, []);

// forma de fazer um useEffect com async/await
// useEffect(() => {
//   const fetch = async () => {
//     const results = await getStarWarsAPI();
//     const allHeaders = Object.keys(results[0])
//       .filter((header) => header !== 'residents');
//     setTableHeader(allHeaders);
//   };
//   fetch();
// }, []);

// useEffect(() => {
//   const searchedPlanet = dataApi.filter((planet) => (
//     planet.name.includes(filters.filterByName.name)));
//   setFilteredPlanet(searchedPlanet);
// }, [dataApi, filters]);

// const filtersValueFunc = () => {
//   const { columnFilter, comparisonFilter, valueFilter } = filters;
//   const filterByValue = filteredPlanet.filter((planet) => {
//     if (comparisonFilter === 'maior que') {
//       return parseInt(planet[columnFilter], 10) > parseInt(valueFilter, 10);
//     } if (comparisonFilter === 'menor que') {
//       return parseInt(planet[columnFilter], 10) < parseInt(valueFilter, 10);
//     } return parseInt(planet[columnFilter], 10) === parseInt(valueFilter, 10);
//   });
//   return setFilteredPlanet(filterByValue);
// };
