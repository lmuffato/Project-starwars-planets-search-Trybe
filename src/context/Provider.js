import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import getStarWarsAPI from '../services/getStarWarsAPI';
import Context from './Context';

function Provider({ children }) {
  const [dataApi, setDataApi] = useState([]);
  const [tableHeader, setTableHeader] = useState([]);

  useEffect(() => {
    getStarWarsAPI().then((results) => setDataApi(results));
  }, []);

  useEffect(() => {
    if (dataApi.length > 0) {
      const headers = Object.keys(dataApi[0])
        .filter((header) => header !== 'residents');
      setTableHeader(headers);
    }
  }, [dataApi]);

  const contextValue = {
    dataApi,
    tableHeader,
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

// forma de fazer um useEffect com async/await
// useEffect(() => {
//   const fetch = async () => {
//     const results = await getStarWarsAPI();
//     const allHeaders = Object.keys(results[0])
//       .filter((header) => header !== 'residents');
//     setTableHeader(allHeaders);
//   };
//   fetch();
// }, []);
