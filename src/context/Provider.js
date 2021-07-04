import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import planetAPI from '../services/planetAPI';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [searchPlanet, setSearchPlanet] = useState([]);

  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });

  const handleSetValueToFilter = (col, compar, val) => {
    setFilters({
      ...filters,
      filterByNumericValues: [{
        column: col,
        comparison: compar,
        value: val,
      }],
    });
  };

  useEffect(() => {
    planetAPI().then((results) => setData(results));
  }, []);

  useEffect(() => {
    planetAPI().then((results) => setSearchPlanet(results));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const headers = Object.keys(data[0])
        .filter((headerName) => headerName !== 'residents');
      setHeader(headers);
    }
  }, [data]);

  useEffect(() => {
    const filterPlanet = data.filter((planet) => planet.name
      .includes(filters.filterByName.name));
    setSearchPlanet(filterPlanet);
  }, [data, filters]);

  const contextValue = {
    data,
    header,
    setFilters,
    filters,
    searchPlanet,
    handleSetValueToFilter,
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: object,
}.isRequired;

export default Provider;
