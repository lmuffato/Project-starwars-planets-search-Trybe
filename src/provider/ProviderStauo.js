import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import ContextStauo from './ContextStauo';
import getApiStauo from '../services/fetchApiStauo';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [dataTitle, setDataTitle] = useState([]);

  const respApi = async () => {
    const results = await getApiStauo();
    setData(results);
    setDataTitle(results);
  };

  useEffect(() => {
    respApi();
  }, []);

  const context = {
    data,
    dataTitle,
  };

  return (
    <ContextStauo.Provider value={ context }>
      { children }
    </ContextStauo.Provider>
  );
}

Provider.propTypes = {
  children: object,
}.isRequired;

export default Provider;
