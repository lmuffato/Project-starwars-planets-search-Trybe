import React, { useState, useEffect } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import fetchApi from '../services/api';
import ContextApi from '../context/context';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState(ContextApi);

  const getApi = async () => {
    const getPlanets = await fetchApi();
    setPlanets(getPlanets);
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <ContextApi.Provider value={ { planets } }>
      { children }
    </ContextApi.Provider>
  );
};

Provider.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};

export default Provider;
