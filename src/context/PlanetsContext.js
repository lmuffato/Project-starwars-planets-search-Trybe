import React, { useState, createContext, useEffect } from 'react';
import { element } from 'prop-types';

import getPlanets from '../services/starWarsAPI';

export const PlanetsContext = createContext({});

const PlanetsProvider = ({
  children,
}) => {
  const [planets, setPlanets] = useState([]);
  const [data, setData] = useState(planets);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const setPlanetsResult = async () => {
      setPlanets(await getPlanets());
      setData(await getPlanets());
    };

    setPlanetsResult();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        setData,
        planets,
        filters,
        setFilters,
      } }
    >
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: element,
}.isRequired;

export default PlanetsProvider;
