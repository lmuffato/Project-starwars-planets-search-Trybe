import React, { useState } from 'react';
import { node } from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState();
  const contextValue = {
    planets,
    setPlanets,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
