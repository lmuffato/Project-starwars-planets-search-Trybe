import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import planetContext from './planetContext';
import getPlanetsApi from '../services/getPlanetsApi';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {},
    ],
  });
  const [isLoading, setIsLoading] = useState(false);

  const getPlanets = useCallback(async () => {
    setIsLoading(true);
    const responsePlanets = await getPlanetsApi();
    setPlanets(responsePlanets);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (filters.filterByName) {
      const { filterByName: { name } } = filters;

      if (name.length) {
        const planetsFilteredByName = planets
          .filter((planet) => planet.name
            .includes(name));

        setPlanets(planetsFilteredByName);
      }
    }
  }, [filters, planets]);

  useEffect(() => {
    const { filterByNumericValues } = filters;

    if (filterByNumericValues && filterByNumericValues.length) {
      filterByNumericValues.forEach((filter) => {
        const { column, comparison, value } = filter;

        const filteredPlanets = planets.filter((planet) => {
          if (comparison === 'maior que') {
            return planet[column] > value;
          }

          if (comparison === 'menor que') {
            return planet[column] < value;
          }

          if (comparison === 'igual a') {
            return planet[column] === value;
          }

          return planet;
        });

        setPlanets(filteredPlanets);
      });
    }
  }, [filters, planets]);

  useEffect(() => {
    if (filters.filterByName
      && !filters.filterByName.name.length
      && !filters.filterByNumericValues) {
      getPlanets();
    }
  }, [filters.filterByName, filters.filterByNumericValues, getPlanets]);

  return (
    <planetContext.Provider
      value={
        { planets, isLoading, getPlanets, filters, setFilters }
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
