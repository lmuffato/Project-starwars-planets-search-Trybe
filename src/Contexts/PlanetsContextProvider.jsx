import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanets from '../services/api';

export const PlanetsContext = createContext({});

export function PlanetsContextProvider({ children }) {
  const [planetsList, setPlanets] = useState([]);

  async function getPlanets() {
    const planets = await fetchPlanets();
    setPlanets(planets);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data: planetsList } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
