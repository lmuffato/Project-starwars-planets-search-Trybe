import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
// import fetchAPI from '../services/starWarsAPI';
import StarWarsContext from './starWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([planets]);
  const [optionFilter, setOptionFilter] = useState({
    columnFilter: 'population',
    comparisonFilter: 'maior que',
    valueFilter: '',
  });

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });
  // Provider feito com ajuda do estudo do PR da Elisa França

  useEffect(() => {
    fetchAPI().then((results) => setPlanets(results));
  }, []);

  // useEffect(() => {
  //   const fetchPlanets = async () => {
  //     const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  //     const planetsObject = await request.json();
  //     const { results } = planetsObject;
  //     setPlanets(results);
  //   };
  //   fetchPlanets();
  // }, []);

  useEffect(() => {
    const filtereds = planets.filter((planet) => (
      planet.name.includes(filters.filterByName.name)));
    setFilteredPlanets(filtereds);
  }, [filters, planets]);

  useEffect(() => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    if (comparison === 'maior que') {
      const newList = planets.filter((planet) => (
        Number(planet[column])
        > Number(value)));
      setFilteredPlanets(newList);
    }
    if (comparison === 'menor que') {
      const newList = planets.filter((planet) => (
        Number(planet[column])
        < Number(value)));
      setFilteredPlanets(newList);
    }
    if (comparison === 'igual a') {
      const newList = planets.filter((planet) => (
        Number(planet[column])
        === Number(value)));
      setFilteredPlanets(newList);
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
