import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import planetContext from './planetContext';
import getPlanetsApi from '../services/getPlanetsApi';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPlanets = useCallback(async () => {
    setIsLoading(true);
    const responsePlanets = await getPlanetsApi();
    setPlanets(responsePlanets);
    setIsLoading(true);
  }, []);

  return (
    <planetContext.Provider value={ { planets, isLoading, getPlanets } }>
      {children}
    </planetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
