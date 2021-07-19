import React, { useState, useEffect } from 'react';
import { element } from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/API';

function StarWarsProvider({ children }) {
  const INITIAL_FILTER = {
    filters: { filterByName: { name: '' }, filterByNumericValues: [] },
  };

  const [originalPlanets, setOriginalPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  async function fetchPlanets() {
    const fetchedPlanets = await getPlanets();
    setOriginalPlanets(fetchedPlanets);
    setFilteredPlanets(fetchedPlanets);
    setLoaded(true);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    const { filters: { filterByName: { name } } } = filter;
    if (filter.filters.filterByName !== '') {
      setFilteredPlanets(originalPlanets.filter((planet) => planet.name.includes(name)));
    }
  }, [filter]);

  useEffect(() => {
    const { filters: { filterByNumericValues } } = filter;
    if (filter.filters.filterByNumericValues.length !== 0) {
      const {
        column, comparison, value,
      } = filterByNumericValues[(filterByNumericValues.length - 1)];
      const valueToInt = parseInt(value, 16);
      if (comparison === 'maior que') {
        setFilteredPlanets(
          originalPlanets.filter((planet) => parseInt(planet[column], 16) > valueToInt),
        );
      }
      if (comparison === 'menor que') {
        setFilteredPlanets(originalPlanets.filter(
          (planet) => (parseInt(planet[column], 16) < valueToInt),
        ));
      }
      if (comparison === 'igual a') {
        setFilteredPlanets(
          originalPlanets.filter((planet) => parseInt(planet[column], 16) === valueToInt),
        );
      }
    }
  }, [filter]);

  const consumer = {
    filteredPlanets,
    loaded,
    filter,
    setFilter,
  };

  return (
    <StarWarsContext.Provider value={ { ...consumer } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: element.isRequired,
};

export default StarWarsProvider;
