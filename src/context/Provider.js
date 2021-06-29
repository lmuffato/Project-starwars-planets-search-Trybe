import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getAPI from '../services/getAPIs';
import PlanetContext from './PlanetContext';

function Provider({ children }) {
  const [planets, dispatchPlanets] = useState([]);
  const [planetData, dispatchData] = useState([]);

  useEffect(() => {
    getAPI().then((results) => dispatchPlanets(results));
  }, []);

  useEffect(() => {
    if (planets.length > 0) {
      const getNames = Object.keys(planets[0]);
      dispatchData(getNames);
    }
  }, [planets]);

  const contextData = {
    planets,
    names: planetData,
  };

  return (
    <PlanetContext.Provider value={ contextData }>
      {children}
    </PlanetContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default Provider;
