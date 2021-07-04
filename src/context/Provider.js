import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import planetAPI from '../services/planetAPI';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    planetAPI().then((results) => setData(results));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const headers = Object.keys(data[0])
        .filter((headerName) => headerName !== 'residents');
      setHeader(headers);
    }
  }, [data, header]);

  const contextValue = {
    data,
    header,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: object,
}.isRequired;

export default Provider;
