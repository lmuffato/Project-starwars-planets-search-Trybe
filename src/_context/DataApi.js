import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';
import dataFetch from '../_services/dataFetch';

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const dataResult = await dataFetch();
      setData(dataResult);
      setLoading(false);
    };
    fetchApi();
  }, []);

  const context = {
    data,
    loading,
  };

  return (
    <ApiContext.Provider value={ context }>
      {children}
    </ApiContext.Provider>
  );
};

ApiContextProvider.propTypes = {
  children: node,
}.isRequired;

export default ApiContextProvider;
