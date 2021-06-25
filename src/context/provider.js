import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  console.log(planets);
  async function getPlanets() {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await results.json();
    console.log(data);
    setPlanets(data.results);
  }

  const contextValue = {
    planets,
    getPlanets,
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
