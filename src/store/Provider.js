import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import context from './Context';
import fetchPlanets from '../services/Data';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filter, setFilter] = useState({
    filteredByName: '',
  });

  useEffect(() => {
    fetchPlanets().then(({ results }) => setData(results));
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      const keyData = Object.keys(data[0]);
      setKeys(keyData);
    }
  }, [data]);

  const contextValue = {
    data,
    keys,
    filter,
    setFilter,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
