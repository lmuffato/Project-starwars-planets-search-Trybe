import React, { useState, useEffect } from 'react';

import propTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import fetchStarWars from '../services/fetchStarWarsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchStarWars();
      setData(results);
    };
    getPlanets();
  }, []);

  const provider = {
    data,
    filters: {
      filterByName: {
        name,
      },
    },
    setName,
  };

  return (
    <planetsContext.Provider value={ provider }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;
