import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';
import PlanetsContext from './ContextPlanets';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetchPlanets();
      setPlanets(data);
    })();
  }, []);
  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        setPlanets,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
};
PlanetsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default PlanetsProvider;
