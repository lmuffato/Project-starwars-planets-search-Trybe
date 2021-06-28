import React, { useState, useEffect } from 'react';

import propTypes from 'prop-types';
import planetsContext from './PlanetsContext';
import fetchStarWars from '../services/fetchStarWarsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ filterByName: {}, filterByNumericValues: [] });
  const [name, setName] = useState('');
  const [columns, setColumns] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const [column, setColumn] = useState('population');

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetchStarWars();
      setData(results);
    };
    getPlanets();
  }, []);

  // useEffect(() => {
  //  const { filterByNumericValues } = filters;
  //  console.log(filterByNumericValues);
  // });

  const handleFilter = (obj) => {
    setFilters({
      ...filters, filterByNumericValues: [...filters.filterByNumericValues, obj],
    });
    setColumn(obj.column);
    setValue(obj.value);
    setComparison(obj.comparison);
  };

  const provider = {
    handleFilter,
    data,
    filters,
    setFilters,
    name,
    setName,
    columns,
    setColumns,
    value,
    comparison,
    column,
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
