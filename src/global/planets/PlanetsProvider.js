import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const planetsContext = {
    planets,
    setPlanets,
  };

  return (
    <PlanetContext.Provider value={ planetsContext }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetsProvider.defaultProps = {
  children: '',
};

PlanetsProvider.propTypes = {
  children: PropTypes.element,
};

export default PlanetsProvider;
