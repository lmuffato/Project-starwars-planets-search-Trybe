import React, { useEffect, useState, createContext } from 'react';
import { element } from 'prop-types';
import getApi from '../Services/API';

export const PlanetsContext = createContext({});

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [data, setData] = useState(planets);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const setAPIResult = async () => {
      setPlanets(await getApi());
      setData(await getApi());
    };
    setAPIResult();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ { planets, filters, setFilters, setPlanets, data, setData } }
    >
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: element,
}.isRequired;

export default PlanetsProvider;
