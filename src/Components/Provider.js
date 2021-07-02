// requisito feito com ajuda do colega Nilson Ribeiro.
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import PlanetsFromApi from '../PlanetsFromApi';
import ContextApi from './ContextApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [name, setSearchedName] = useState('');
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  useEffect(() => {
    PlanetsFromApi().then(({ results }) => setData(results));
  }, []);

  // requisito 3 e 4 feito com ajuda do colega Perycles
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

  const contextValue = {
    data,
    setSearchedName,
    setfilterByNumericValues,
    filters: { filterByName: { name } },
    filterByNumericValues,
  };

  return (
    <ContextApi.Provider value={ contextValue }>
      {children}
    </ContextApi.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
