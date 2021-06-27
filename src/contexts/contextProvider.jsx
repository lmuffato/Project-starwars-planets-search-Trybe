import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import planetsContext from './planetsContext';
import FETCH_PLANETS from '../services/MayTheFetchBeWithYou';

function PlanetsProvider({ children }) {
  const [data, setdata] = useState([]);
  const [theadData, settheadData] = useState([]);

  useEffect(() => {
    FETCH_PLANETS().then(({ results }) => setdata(results));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const tableHeader = Object.keys(data[0])
        .filter((headText) => headText !== 'residents');
      settheadData(tableHeader);
    }
  }, [data]);

  const contextValue = {
    data,
    theadData,
  };

  return (
    <planetsContext.Provider value={ contextValue }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: object,
}.isRequired;

export default PlanetsProvider;
