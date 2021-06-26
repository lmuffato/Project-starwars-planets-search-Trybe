/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getStarWarsPlanets from './services/starWarsApi';
import StartWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filtered, setFiltered] = useState([]);
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
    const filteredPlanets = planets.filter((planet) => delete planet.residents);
    setData(filteredPlanets);
  };

  const handleFilterByNumbers = () => {
    switch (comparison) {
    case 'maior que':
      setFiltered(
        data.filter((planet) => (
          (planet[column]) > (Number(value)))),
      );
      console.log('maior');
      break;
    case 'menor que':
      setFiltered(
        data.filter((planet) => (
          (planet[column]) < (Number(value)))),
      );
      break;
    case 'igual a':
      setFiltered(
        data.filter((planet) => (
          (planet[column]) === (Number(value)))),
      );
      break;

    default:
      return value;
    }
  };

  useEffect(() => {
    handleFilterByNumbers();
  }, [data]);

  useEffect(() => {
    setFiltered(
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
        filtered,
        handleFilterByNumbers,
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
