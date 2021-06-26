import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import ContextApi from './ContextApi';
import PlanetsFromApi from '../PlanetsFromApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);

  const contextValue = {
    data,
    keys,
  };
  useEffect(() => {
    PlanetsFromApi().then(({ results }) => setData(results));
  }, []);
  useEffect(() => {
    if (data.length !== 0) {
      const keysLength = Object.keys(data[0]);
      setKeys(keysLength);
    }
  }, [data]);
  return (
    <ContextApi.Provider value={ contextValue }>
      {children}
    </ContextApi.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
