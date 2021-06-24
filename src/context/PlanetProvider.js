import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/getPlanetsAPI';
import planetContext from './planetContext';

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByValue: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const { filterByValue } = filters;

  useEffect(() => {
    getPlanets().then((response) => {
      response.forEach((item) => delete item.residents);
      setData(response);
    });
  }, []);

  const handleFilterInput = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByValue: [
        {
          ...filterByValue[0],
          value,
        },
      ],
    });
  };

  const filterPlanetsBtn = () => {
    setFilteredPlanets({
      ...filteredPlanets,
      ...filters.filterByValue[0],
    });
  };

  const handleFilter = () => {
    const { column, comparison, value } = filteredPlanets;
    let filtered = data;
    if (comparison === 'maior que') {
      filtered = filtered.filter(
        (planet) => parseFloat(planet[column]) > parseFloat(value),
      );
    } else if (comparison === 'menor que') {
      filtered = filtered.filter(
        (planet) => parseFloat(planet[column]) < parseFloat(value),
      );
    } else if (comparison === 'igual a') {
      filtered = filtered.filter(
        (planet) => parseFloat(planet[column]) === parseFloat(value),
      );
    }
    return filtered;
  };

  const context = {
    data,
    setFilters,
    filteredPlanets,
    filters,
    handleFilterInput,
    filterPlanetsBtn,
    handleFilter,
  };
  return (
    <planetContext.Provider value={ context }>
      {children}
    </planetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PlanetProvider;
