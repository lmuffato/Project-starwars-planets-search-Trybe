import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import myContext from './myContext';

const Provider = ({ children }) => {
  const [data, changeData] = useState([]);
  const [name, changeFilterName] = useState('');
  const [numericFilters, changeNumericFilters] = useState([]);
  const [filteredPlanets, changeFilteredPlanets] = useState([]);
  const [orderFilters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((result) => {
        result.json()
          .then(({ results }) => {
            changeData(results);
          });
      });
  }, []);

  useEffect(() => {
    let filtered = data.filter((planet) => planet.name.includes(name));
    numericFilters.forEach(({ column, comparison, value }) => {
      if (column && comparison) {
        switch (comparison) {
        case 'maior que':
          filtered = filtered.filter((planet) => parseFloat(planet[column]) > value);
          break;
        case 'menor que':
          filtered = filtered.filter((planet) => parseFloat(planet[column]) < value);
          break;
        case 'igual a':
          filtered = filtered.filter((planet) => parseFloat(planet[column]) === value);
          break;
        default:
          break;
        }
      }
    });
    changeFilteredPlanets(filtered);
  }, [name, data, numericFilters]);

  const addNumericFilter = ({ column, comparison, value }) => {
    changeNumericFilters([
      ...numericFilters,
      { column, comparison, value },
    ]);
  };

  const deleteNumericFilter = (column) => {
    const filters = [];
    numericFilters.forEach((filter) => {
      if (filter.column !== column) {
        filters.push(filter);
      }
    });
    changeNumericFilters(filters);
  };

  const setOrderSort = (column, sort) => {
    setFilters({ ...orderFilters, order: { column, sort } });
  };

  const value = {
    data: filteredPlanets,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: [
        ...numericFilters,
      ],
      order: {
        column: 'Name',
        sort: 'ASC',
      },
    },
    changeFilterName,
    addNumericFilter,
    deleteNumericFilter,
    setOrderSort,
  };

  return (
    <myContext.Provider value={ value }>
      { children }
    </myContext.Provider>
  );
};

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
