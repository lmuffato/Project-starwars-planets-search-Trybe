import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import planetsContext from './planetsContext';
import FETCH_PLANETS from '../services/MayTheFetchBeWithYou';

function PlanetsProvider({ children }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    FETCH_PLANETS().then(({ results }) => setdata(results));
  });

  const contextValue = {
    data,
    setdata,
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
