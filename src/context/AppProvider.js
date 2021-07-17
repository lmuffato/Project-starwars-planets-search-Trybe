import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [newData, setNewData] = useState([]);
  const [filterText, setFilterText] = useState('');

  const context = {
    newData,
    filterText,
    setNewData,
    setFilterText,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
