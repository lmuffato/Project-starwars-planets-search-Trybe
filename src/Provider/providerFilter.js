import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextFilter from '../context/contextFilter';

const ProviderFilter = ({ children }) => {
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  const filter = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value.toLowerCase() } });
  };

  return (
    <ContextFilter.Provider value={ { filter, filters } }>
      { children }
    </ContextFilter.Provider>
  );
};

ProviderFilter.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ProviderFilter;
