import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [numeralValue, setNumeralValue] = useState([]);

  const contextValue = {
    data: planets,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: numeralValue,
    },
    setPlanets,
    setName,
    setNumeralValue,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
