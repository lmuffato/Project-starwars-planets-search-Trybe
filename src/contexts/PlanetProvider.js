import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import planetContext from './planetContext';
import getPlanetsApi from '../services/getPlanetsApi';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  function filterPlanetsByNumericValues(column, comparison, value) {
    const filteredPlanets = planets.filter((planet) => {
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }

      if (comparison === 'maior que') {
        return Number(planet[column] > Number(value));
      }

      return Number(planet[column]) === Number(value);
    });

    return filteredPlanets;
  }

  function handleNumericFilters(column, comparison, value) {
    const { filterByNumericValues } = filters;

    if (filterByNumericValues.length === 0) {
      const filteredPlanets = filterPlanetsByNumericValues(column, comparison, value);

      setPlanets(filteredPlanets);
    } else {
      filterByNumericValues.forEach((filter) => {
        const { column: filterColumn,
          comparison: filterComparison,
          value: filterValue } = filter;

        const filteredPlanets = filterPlanetsByNumericValues(filterColumn,
          filterComparison, filterValue);

        setPlanets(filteredPlanets);
      });
    }
  }

  const getPlanets = useCallback(async () => {
    setIsLoading(true);
    const responsePlanets = await getPlanetsApi();
    setPlanets(responsePlanets);
    setIsLoading(false);
  }, []);

  function handleNameFilter() {
    if (filters.filterByName.name === '' && filters.filterByNumericValues.length === 0) {
      getPlanets();
    }

    const planetsFilteredByName = planets
      .filter((planet) => planet.name
        .includes(filters.filterByName.name));

    setPlanets(planetsFilteredByName);
  }

  return (
    <planetContext.Provider
      value={
        { planets,
          isLoading,
          getPlanets,
          filters,
          setFilters,
          handleNumericFilters,
          handleNameFilter }
      }
    >
      {children}
    </planetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
