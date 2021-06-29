import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterContext from '../context/FilterContext';

const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  const filter = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  return (
    <FilterContext.Provider value={ { filter, filters } }>
      { children }
    </FilterContext.Provider>
  );
};

FilterProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default FilterProvider;
