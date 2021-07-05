import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/api';
import ContextApi from '../context/context';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState({ results: [] });

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
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Provider;
