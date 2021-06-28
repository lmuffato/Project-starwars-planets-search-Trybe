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
    order: {
      column: 'name',
      sort: 'ASC',
    },
  } });

  const options = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const contextValue = {
    planets,
    setPlanets,
    planetFilter,
    setPlanetFilter,
    options,
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
