import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getPlanetsFromApi from '../services/api';

export default function Provider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  useEffect(() => {
    getPlanetsFromApi().then((res) => { setData(res); });
  }, []);

  return (
    <Context.Provider value={ { data, filters, setFilters } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes,
}.isRequired;
