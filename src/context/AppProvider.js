import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchAPI from '../services/apiRequest';

const AppProvider = ({ children }) => {
  const OPTIONS = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const MINUS_ONE = -1;

  const [data, setData] = useState([]);
  const [APIResult, setAPIResult] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const sortData = (toFilterData) => {
    const { order: { column, sort } } = filters;
    const info = column.toLowerCase();
    if (OPTIONS.includes(info)) {
      if (sort === 'ASC') {
        return (
          toFilterData.sort((a, b) => (
            Number(a[info]) - Number(b[info])
          )));
      }
      return (
        toFilterData.sort((a, b) => (
          Number(b[info]) - Number(a[info])
        )));
    }

    // LOGICA DA ORDENAÇÃO NÃO NUMÉRICA REFATORADA COM AJUDA DO PAULO HENRIQUE
    if (sort === 'ASC') {
      return (
        toFilterData.sort((a, b) => {
          if (a[info] > b[info]) return 1;
          if (a[info] < b[info]) return MINUS_ONE;
          return 0;
        }));
    }
  };

  // COMPONENT DID MOUNT:
  const getPlanets = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets';

    const planets = await fetchAPI(url);
    planets.forEach((planet) => delete planet.residents);
    const heading = Object.keys(planets[0]).map((info) => info.replace('_', ' '));

    setData(planets);
    setAPIResult(planets);
    setHeadings(heading);
  };

  // COMPONENT DID UPDATE
  useEffect(() => {
    getPlanets();

    const filterData = () => {
      let result;
      const { filterByNumericValues } = filters;
      const newData = () => {
        filterByNumericValues.forEach(({ comparison, column, number }) => {
          const getNumber = Number(number);
          if (comparison === 'menor que') {
            result = data.filter((el) => (
              Number(el[column]) < getNumber));
          } else if (comparison === 'maior que') {
            result = data.filter((el) => Number(el[column]) > getNumber);
          } else {
            result = data.filter((el) => Number(el[column]) === getNumber);
          }
        });
      };
      newData();
      setAPIResult(result);
    };

    if (filters.filterByNumericValues[0]) { filterData(); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.filterByNumericValues, filters.order]);

  const nameFilter = filters.filterByName.name;

  const context = {
    APIResult,
    setAPIResult,
    headings,
    filters,
    setFilters,
    nameFilter,
    OPTIONS,
    sortData,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}.isRequired;

export default AppProvider;
