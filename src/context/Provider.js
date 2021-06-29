import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getAPI from '../services/getAPIs';
import PlanetContext from './PlanetContext';

function Provider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
  };

  const [planets, dispatchPlanets] = useState([]);
  const [query, dispatchQuery] = useState([planets]);
  const [filters, filterDispatch] = useState(INITIAL_STATE);

  useEffect(() => {
    getAPI().then((results) => dispatchPlanets(results));
  }, []);

  useEffect(() => {
    const results = planets.filter((planet) => (
      planet.name.includes(filters.filterByName.name)));
    dispatchQuery(results);
  }, [filters, planets]);

  const contextData = {
    filterDispatch,
    query,
    filters,
  };

  return (
    <PlanetContext.Provider value={ contextData }>
      {children}
    </PlanetContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default Provider;
