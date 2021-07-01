import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';
import starWarsPlanetAPI from '../Service/starWarsPlanetAPI';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const contextValue = {
    filters,
    setFilters,
    planets,
  };

  useEffect(() => {
    const fetchPlanetsAPI = async () => {
      const results = await starWarsPlanetAPI();
      setData(results);
      setPlanets(results);
    };
    fetchPlanetsAPI();
  }, []);

  function filteringByName(incomingText) {
    let filteredPlanets = planets;
    if (incomingText) {
      filteredPlanets = data
        .filter((planet) => planet.name
          .toLowerCase().includes(incomingText.toLowerCase()));
      setPlanets(filteredPlanets);
    } else {
      setPlanets(data);
    }
    return filteredPlanets;
  }

  function filteringByNumbers(planet, filter) {
    if (filter.comparison === 'maior que'
    && parseInt(planet[filter.column], 10) > parseInt(filter.value, 10)) {
      return planet;
    } if (filter.comparison === 'menor que'
    && parseInt(planet[filter.column], 10) < parseInt(filter.value, 10)) {
      return planet;
    } if (filter.comparison === 'igual a'
    && parseInt(planet[filter.column], 10) === parseInt(filter.value, 10)) {
      return planet;
    }
  }

  useEffect(() => {
    const incomingText = filters.filterByName.name;
    const planetsFilteredByName = filteringByName(incomingText);
    const numericFilter = filters.filterByNumericValues;
    if (numericFilter.length) {
      numericFilter.forEach((filter) => {
        const filtros = planetsFilteredByName
          .filter((planet) => filteringByNumbers(planet,
            filter));
        return setPlanets(filtros);
      });
    }
  }, [filters]);

  return (
    <ContextPlanets.Provider value={ contextValue }>
      { children }
    </ContextPlanets.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
