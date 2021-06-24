import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/getPlanets';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchPlanets() {
    setIsLoading(true);
    const planets = await getPlanets();
    const noResidents = planets.map((planet) => {
      delete planet.residents;
      return planet;
    });
    setData(noResidents);
    setIsLoading(false);
  }

  return (
    <PlanetsContext.Provider
      value={ {
        data, isLoading, fetchPlanets,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
