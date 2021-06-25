import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import fetchPlanets from '../services/api';

export const PlanetsContext = createContext({});

export function PlanetsContextProvider({ children }) {
  const [planetsList, setPlanets] = useState([]);
  const [planetasIniciais, setPlanetasIniciais] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  async function getPlanets() {
    const planets = await fetchPlanets();
    setPlanets(planets);
    setPlanetasIniciais(planets);
    setLoading(false);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ { data: { planetsList, planetasIniciais, setPlanets, loading },
        filters: { filters, setFilters } } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsContextProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
