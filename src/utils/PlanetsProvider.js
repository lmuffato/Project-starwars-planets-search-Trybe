import React, { useState } from 'react';
import { node } from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetFilter, setPlanetFilter] = useState({ filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  } });
  const contextValue = {
    planets,
    setPlanets,
    planetFilter,
    setPlanetFilter,
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
