import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import fetchAPI from '../services/fetchAPI';
import Context from './Context';

function Provider({ children }) {
  const [dataRead, dataWrite] = useState([]);
  // const [keys, altKes]
  const requestAPI = async () => {
    const response = await fetchAPI();
    // console.log(response);
    dataWrite(response.results);
  };

  useEffect(() => {
    requestAPI();
  }, []);

  const dataValue = {
    dataRead,
  };

  return (
    <Context.Provider value={ dataValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
