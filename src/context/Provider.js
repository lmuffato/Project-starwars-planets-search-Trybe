import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanet from '../services/data';
import AppContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);

  //   const x = await fetchPlanet();
  //   console.log(x);
  const contextvalue = {
    data,
    keys,
  };
  useEffect(() => {
    fetchPlanet().then(({ results }) => setData(results));
  }, []);
  console.log('xx', data, keys);
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
