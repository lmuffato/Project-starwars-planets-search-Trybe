import React, { useState } from 'react';
import PropTypes from 'prop-types';

import getPlanets from '../services/PlanetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setPlanets] = useState([]);
  const [filterName, setFilterName] = useState([]);
  const [lookForPlanetName, setLookForPlanetName] = useState('');

  async function fetchPlanets() {
    setIsLoading(true);
    const planetsResults = await getPlanets();
    setPlanets(planetsResults);
    setIsLoading(false);
  }

  return (
    <PlanetsContext.Provider
      value={ {
        isLoading,
        data,
        fetchPlanets,
        filterName,
        setFilterName,
        lookForPlanetName,
        setLookForPlanetName,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetsProvider;
