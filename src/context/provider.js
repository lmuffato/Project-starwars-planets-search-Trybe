import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsPlanets from './index';

function Provider({ children }) {
  const INICIAL_FILTERS = {
    filterByName: { name: '' },
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '',
    }],
  };

  const [data, setData] = useState([{}]);
  const [filters, setFilters] = useState(INICIAL_FILTERS);
  const [backup, setBackup] = useState([]);

  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    backup,
    setBackup,
  };

  return (
    <starWarsPlanets.Provider value={ contextValue }>
      {children}
    </starWarsPlanets.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
