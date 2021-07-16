import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [data, setData] = useState([]);

  const context = {
    data,
    setData,
  };

  return (
    <AppContext.Provider value={ { context } }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
