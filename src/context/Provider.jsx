import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getPlanetsFromApi from '../services/api';

export default function Provider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    getPlanetsFromApi().then((res) => { setData(res); });
  }, []);

  return (
    <Context.Provider value={ data }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes,
}.isRequired;
