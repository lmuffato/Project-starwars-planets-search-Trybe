import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanets from '../services/api';

export const PlanetsContext = createContext({});

export function PlanetsContextProvider({ children }) {
  const [planetsList, setPlanets] = useState([]);
  const [planetasInicial, setPlanetasIniciais] = useState([]);

  async function getPlanets() {
    const planets = await fetchPlanets();
    setPlanets(planets);
    setPlanetasIniciais(planets);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  function filterByName(text) {
    const filteredPlanets = planetasInicial
      .filter((planet) => planet.name.includes(text));
    setPlanets(filteredPlanets);
  }

  return (
    <PlanetsContext.Provider
      value={ { data: planetsList,
        filters: { filterByName: { filterByName } } } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
