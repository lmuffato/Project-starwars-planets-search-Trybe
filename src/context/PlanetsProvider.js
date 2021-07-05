import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PlanetsContext } from '.';
import fetchPlanets from '../services/fetchPlanets';

function PlanetsProvider({ children }) {
  const [data, setPlanets] = useState([]);
  const [filteredValues, setFilteredValues] = useState(data);

  const getPlanets = async () => {
    const planets = await fetchPlanets();
    setPlanets(planets);
    setFilteredValues(planets);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data, filteredValues, setFilteredValues } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
