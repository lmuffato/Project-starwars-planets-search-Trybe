import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

function Provider({ children }) {
  const [planets, setPlanets] = useState('');

  const contextValue = {
    planets,
    setPlanets,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
