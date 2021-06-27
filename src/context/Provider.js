import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import dataAPI from '../services/planetsAPI';

function Provider({ children }) {
  const [dataPlanets, setData] = useState('');

  useEffect(() => {
    dataAPI().then(({ results }) => setData(results));
  }, []);

  const contextValue = {
    dataPlanets,
    setData,
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

// Explicação e orientação sobre refatoração do Provider para corrigir a forma de usar estados do Guilherme Dornelles - Turma 10A
