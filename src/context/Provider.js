import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountriesContext from './CountriesContext';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  console.log(planets);
  const [filteredPlanets, setFilteredPlanets] = useState(planets);
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

  useEffect(() => {
    const fetchPlanets = async () => {
      const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetsObject = await request.json();
      const { results } = planetsObject;
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const newList = planets.filter((planet) => (
      planet.name.includes(filters.filterByName.name)));
    setFilteredPlanets(newList);
  }, [filters, planets]);

  useEffect(() => {
    const { filterByNumericValues } = filters;
    // const position = filterByNumericValues.length - 1;
    // console.log(position);
    console.log(filterByNumericValues);

    if (filterByNumericValues[0].comparison === 'maior que') {
      const newList = planets.filter((planet) => (
        planet[filterByNumericValues[0].column] > filterByNumericValues[0].value));
      setFilteredPlanets(newList);
      console.log('newList', newList);
    }
    if (filterByNumericValues[0].comparison === 'menor que') {
      const newList = planets.filter((planet) => (
        planet[filterByNumericValues[0].column] < filterByNumericValues[0].value));
      setFilteredPlanets(newList);
      console.log('newList', newList);
    }
    if (filterByNumericValues[0].comparison === 'igual a') {
      const newList = planets.filter((planet) => (
        planet[filterByNumericValues[0].column] === filterByNumericValues[0].value));
      setFilteredPlanets(newList);
      console.log('newList', newList);
    }
  }, [filters, planets]);

  const context = {
    filteredPlanets,
    filters,
    setFilters,
  };

  return (
    <CountriesContext.Provider value={ context }>
      { children }
    </CountriesContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
