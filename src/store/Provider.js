import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import planetsAPI from '../services/planetsAPI';

const Provider = ({ children }) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  useEffect(() => {
    setIsLoading(true);

    async function fetchPlanets() {
      const { results } = await planetsAPI();
      results.map((planet, index) => {
        delete planet.residents;
        return results[index];
      });
      return setData(results);
    }

    fetchPlanets();
    setIsLoading(false);
  }, []);

  const contextValue = {
    data,
    isLoading,
    filters,
    setFilters,
  };
  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
