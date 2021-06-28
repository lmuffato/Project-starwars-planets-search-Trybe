import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanet from '../services/data';
import AppContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [name, setSearch] = useState('');
  const toSetSearch = (value) => setSearch(value);

  const contextvalue = {
    data,
    keys,
    toSetSearch,
    filters: { filterByName: { name } },
  };
  useEffect(() => {
    fetchPlanet().then(({ results }) => setData(results));
  }, []);
  useEffect(() => {
    if (data.length !== 0) {
      const keyData = Object.keys(data[0]);
      setKeys(keyData);
    }
  }, [data]);

  return (
    <AppContext.Provider value={ contextvalue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
