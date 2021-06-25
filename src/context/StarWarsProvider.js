/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import getStarWarsPlanets from './services/starWarsApi';
import StartWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filteredByName, setFilteredByName] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const planetsData = {
    data,
    filters: { filterByName: { name } },
    filterByNumericValues: [{ column, comparison, value }],
  };

  const getPlanets = async () => {
    const planets = await getStarWarsPlanets();
    const filtered = planets.filter((planet) => delete planet.residents);
    setData(filtered);
  };

  useEffect(() => {
    setFilteredByName(
      data.filter((planet) => (
        planet.name.toLowerCase().includes(name.toLowerCase()))),
    );
  }, [name, data]);

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <StartWarsContext.Provider
      value={ {
        planetsData,
        setColumn,
        setComparison,
        setValue,
        setName,
        filteredByName,
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
