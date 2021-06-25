/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getStarWarsPlanets from './services/starWarsApi';
import StartWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const planetsData = {
    data,
    filters: { filterByName: { name } },
  };

  const getPlanets = async () => {
    const planets = await getStarWarsPlanets();
    const filtered = planets.filter((planet) => delete planet.residents);
    setData(filtered);
  };

  const handleFilterByName = () => {
    const filterByName = data.filter((planet) => (
      planet.name.toLowerCase().includes(name.toLowerCase())));
    setData(filterByName);
  };

  useEffect(() => {
    handleFilterByName();
  }, [name]);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StartWarsContext.Provider
      value={ {
        planetsData,
        handleFilterByName,
        setName,
      } }
    >
      {children}
    </StartWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarWarsProvider;
