import React, { useState } from 'react';
import PropTypes from 'prop-types';

import getPlanets from '../services/PlanetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setPlanets] = useState([]);

  async function fetchPlanets() {
    setIsLoading(true);
    const planetsResults = await getPlanets();
    setPlanets(planetsResults);
    setIsLoading(false);
  }

  return (
    <PlanetsContext.Provider value={ { isLoading, data, fetchPlanets } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
