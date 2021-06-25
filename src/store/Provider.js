import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ContextPlanets from './ContextPlanets';
import starWarsPlanetAPI from '../Service/starWarsPlanetAPI';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const contextValue = {
    data,
  };

  useEffect(() => {
    const fetchPlanetsAPI = async () => {
      const results = await starWarsPlanetAPI();
      setData(results);
    };
    fetchPlanetsAPI();
  }, []);

  return (
    <ContextPlanets.Provider value={ contextValue }>
      { children }
    </ContextPlanets.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
