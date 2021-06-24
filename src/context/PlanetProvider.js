import React, { useState } from 'react';
import PropTypes from 'prop-types';

import planetsAPI from '../services/api';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [isLoading, setIsloading] = useState(false);
  const [planets, setPlanets] = useState([]);

  async function fetchPlanets() {
    setIsloading(true);
    const planetsFetched = await planetsAPI();

    setPlanets(planetsFetched);
    setIsloading(false);
  }

  return (
    <PlanetContext.Provider value={ { planets, isLoading, fetchPlanets } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default PlanetProvider;
