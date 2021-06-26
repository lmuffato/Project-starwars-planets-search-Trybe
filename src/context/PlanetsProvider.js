import React, { useState, useEffect } from 'react';

import propTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import fetchStarWars from '../services/fetchStarWarsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: {}, filterByNumericValues: [] });
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const [filtersSelect, setFiltersSelect] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchStarWars();
      setData(results);
    };
    getPlanets();
  }, []);

  const handleFilter = (obj) => {
    setFilters({
      ...filters, filterByNumericValues: [...filters.filterByNumericValues, obj],
    });
  };

  const provider = {
    handleFilter,
    data,
    filters,
    setFilters,
    name,
    setName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filtersSelect,
    setFiltersSelect,
  };

  return (
    <planetsContext.Provider value={ provider }>
      {children}
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;
