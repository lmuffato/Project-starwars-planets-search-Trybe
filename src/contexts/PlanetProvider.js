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
  });
  const [isLoading, setIsLoading] = useState(false);

  const getPlanets = useCallback(async () => {
    setIsLoading(true);
    const responsePlanets = await getPlanetsApi();
    setPlanets(responsePlanets);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filters;

    if (name) {
      const planetsFilteredByName = planets
        .filter((planet) => planet.name
          .includes(name));

      setPlanets(planetsFilteredByName);
    } else {
      getPlanets();
    }
  }, [filters, getPlanets, planets]);

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
