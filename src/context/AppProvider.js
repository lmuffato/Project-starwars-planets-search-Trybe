import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import AppContext from './AppContext';
import fetchData from '../services/api';

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  const fetchPlanets = async () => {
    const planetData = await fetchData();
    setData(planetData);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contexts = {
    data,
    setData,
    filters,
    setFilters,
  };

  return (
    <AppContext.Provider value={ contexts }>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: node,
}.isRequired;

export default AppProvider;
