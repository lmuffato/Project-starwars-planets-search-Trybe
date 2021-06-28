/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import API from '../config/config';

import PlanetContext from './PlanetsContext';
import useFilters from '../hooks/useFilters';

function PlanetProvider({ children }) {
  const [applyFilter, setApplyFilter] = useState(false);
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

  function handleSelectValue({ target: { name, value } }) {
    const { filterByNumericValues: filterNumerics } = filters;
    const filterByNumericValues = [
      {
        ...filterNumerics[0],
        [name]: value,
      },
    ];
    setFilters({
      ...filters,
      filterByNumericValues,
    });
  }

  const value = {
    applyFilter,
    isLoading,
    data,
    filters,
    setApplyFilter,
    handleName,
    handleSelectValue,
    fetchData,
  };

  return (
    <PlanetContext.Provider value={ value }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetProvider;
