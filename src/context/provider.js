import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  async function getPlanets() {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await results.json();
    console.log(data);
    setPlanets(data.results);
  }

  useEffect(() => {
    getPlanets();
  }, []);
  console.log(planets);

  const contextValue = {
    planets,
    filters,
    setFilters,
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
