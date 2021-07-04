import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterContext from '../context/FilterContext';

const FILTERS = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(FILTERS);

  const nameFilter = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  const numericFilter = (value) => {
    setFilters(
      { ...filters, filterByNumericValues: [...filters.filterByNumericValues, value] },
    );
  };

  return (
    <FilterContext.Provider value={ { nameFilter, numericFilter, filters } }>
      { children }
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default FilterProvider;
