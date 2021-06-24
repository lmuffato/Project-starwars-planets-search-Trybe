import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [numericValues, setNumericValues] = useState([]);

  const contextValue = {
    data: planets,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: numericValues,
    },
    setPlanets,
    setName,
    setNumericValues,
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
