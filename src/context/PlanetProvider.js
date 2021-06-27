/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import API from '../config/config';

import PlanetContext from './PlanetsContext';
import useFilters from '../hooks/useFilters';

function PlanetProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const [filters, setFilters] = useFilters();

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(API);
    const dataAPI = await response.json();
    setData(dataAPI.results.map((el) => {
      const { residents, ...rest } = el;
      return rest;
    }));
    setIsLoading(false);
  }

  function handleName({ target: { value } }) {
    const filterByName = {
      name: value,
    };
    setFilters({
      ...filters,
      filterByName,
    });
  }

  return (
    <PlanetContext.Provider value={ { isLoading, data, filters, handleName, fetchData } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PlanetProvider;
