import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import getPlanets from '../services/Api';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const getElements = async () => {
    const planets = await getPlanets();
    const filtered = planets.filter((planet) => delete planet.residents);
    setData(filtered);
  };

  return (
    <MyContext.Provider value={ { data, getElements } }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
