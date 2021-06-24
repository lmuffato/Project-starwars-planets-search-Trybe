import React, { useState, createContext, useEffect } from 'react';
import { element } from 'prop-types';

import getPlanets from '../services/starWarsAPI';

export const PlanetsContext = createContext({});

const PlanetsProvider = ({
  children,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const setPlanets = async () => setData(await getPlanets());

    setPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data, setData } }>
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: element,
}.isRequired;

export default PlanetsProvider;
