import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

import END_POINT from '../common/def';
import fetchData from '../services/api';

const Provider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filtersByNumericValues, setFiltersByNumericValues] = useState([]);
  const [unavailableFilters, setUnavailableFilters] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  useEffect(() => {
    fetchData(END_POINT).then((request) => {
      request.map((planet) => delete planet.residents);
      setPlanets([...request]);
    });
  }, []);

  const columns = planets[0] || [];

  const filters = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: filtersByNumericValues,
      order,
    },
  };

  const context = {
    planets,
    ...filters,
    unavailableFilters,
    headers: columns,
    setName,
    setFiltersByNumericValues,
    setUnavailableFilters,
    setOrder,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf({}).isRequired,
};

export default Provider;
