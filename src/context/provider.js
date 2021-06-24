import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsPlanets from './index';

function Provider({ children }) {
  const [data, setData] = useState([{}]);
  const contextValue = {
    data,
    setData,
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
