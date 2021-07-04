import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanet from '../services/data';
import AppContext from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setSearchedName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    fetchPlanet().then(({ results }) => setData(results));
  }, []);

  useEffect(() => {
    filterByNumericValues.map((item) => {
      const { column, comparison, value } = item;
      switch (comparison) {
      case 'maior que':
        return setData(
          [...data.filter((planet) => Number(planet[column]) > Number(value))],
        );
      case 'menor que':
        return setData(
          [...data.filter((planet) => Number(planet[column]) < Number(value))],
        );
      case 'igual a':
        return setData(
          [...data.filter((planet) => Number(planet[column]) === Number(value))],
        );
      default:
        return data;
      }
    });
  }, [filterByNumericValues]);

  const contextvalue = {
    data,
    setSearchedName,
    setFilterByNumericValues,
    filters: { filterByName: { name } },
    filterByNumericValues,
  };

  return (
    <AppContext.Provider value={ contextvalue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
