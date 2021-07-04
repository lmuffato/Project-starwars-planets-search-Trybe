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

  function handleNameFilter() {
    if (filters.filterByName.name === '') {
      getPlanets();
    }

    const planetsFilteredByName = planets
      .filter((planet) => planet.name
        .includes(filters.filterByName.name));

    setPlanets(planetsFilteredByName);
  }

  function handleNumericFilters() {
    const { filterByNumericValues } = filters;

    if (filterByNumericValues && filterByNumericValues.length > 1) {
      console.log('filtrar por valor numerico');

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
