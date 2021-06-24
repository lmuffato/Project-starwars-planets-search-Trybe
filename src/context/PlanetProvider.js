import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import planetsAPI from '../services/planetAPI';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      setIsloading(true);
      const planetsFetched = await planetsAPI();

      setData(planetsFetched);
      setIsloading(false);
    }

    fetchPlanets();
  }, []);

  return (
    <PlanetContext.Provider value={ { data, isLoading } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default PlanetProvider;
