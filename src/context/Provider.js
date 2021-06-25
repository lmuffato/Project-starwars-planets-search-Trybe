import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountriesContext from './PlanetsContext';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
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
    const idx = filterByNumericValues.length - 1;
    // console.log(position);

    if (filterByNumericValues[idx].comparison === 'maior que') {
      const newList = planets.filter((planet) => (
        parseInt(planet[filterByNumericValues[idx].column], 10)
        > parseInt(filterByNumericValues[idx].value, 10)));
      setFilteredPlanets(newList);
      console.log('newList', newList);
    }
    if (filterByNumericValues[idx].comparison === 'menor que') {
      const newList = planets.filter((planet) => (
        parseInt(planet[filterByNumericValues[idx].column], 10)
        < parseInt(filterByNumericValues[idx].value, 10)));
      setFilteredPlanets(newList);
      console.log('newList', newList);
    }
    if (filterByNumericValues[idx].comparison === 'igual a') {
      const newList = planets.filter((planet) => (
        parseInt(planet[filterByNumericValues[idx].column], 10)
        === parseInt(filterByNumericValues[idx].value, 10)));
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
