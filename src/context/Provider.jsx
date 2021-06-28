import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import fetchAPI from '../services/starWarsAPI';
import StarWarsContext from './starWarsContext';

function Provider({ children }) {
  const filtersValues = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: 0,
      },
    ],
  };

  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([planets]);
  const [optionFilter, setOptionFilter] = useState({
    columnFilter: '',
    comparisonFilter: '',
    valueFilter: 0,
  });

  const [filters, setFilters] = useState(filtersValues);
  // Provider feito com ajuda do estudo do PR da Elisa França e do seguinte link https://codesandbox.io/embed/react-hooks-search-filter-4gnwc

  useEffect(() => {
    fetchAPI().then((results) => setPlanets(results));
  }, []);

  useEffect(() => {
    const filtereds = planets.filter((planet) => (
      planet.name.includes(filters.filterByName.name)));
    setFilteredPlanets(filtereds);
  }, [filters, planets]);

  useEffect(() => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    if (comparison === 'maior que') {
      const newFilter = planets.filter((planet) => (
        Number(planet[column])
        > Number(value)));
      setFilteredPlanets(newFilter);
    }
    if (comparison === 'menor que') {
      const newFilter = planets.filter((planet) => (
        Number(planet[column])
        < Number(value)));
      setFilteredPlanets(newFilter);
    }
    if (comparison === 'igual a') {
      const newFilter = planets.filter((planet) => (
        Number(planet[column])
        === Number(value)));
      setFilteredPlanets(newFilter);
    }
  }, [filters, planets]);

  const contextValue = {
    setFilters,
    filteredPlanets,
    filters,
    optionFilter,
    setOptionFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: object,
}.isRequired;

export default Provider;
