import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import starwarsContext from './starwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [columns, setColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    fetchApi()
      .then((result) => setData(result));
  }, []); // stores api data

  useEffect(() => {
    setDataTable(data);
  }, [data]); // puts data into a changeble state

  useEffect(() => {
    const { filterByNumericValues, filterByName } = filters;

    let filteredResult = data.filter(
      (planet) => planet.name.includes(filterByName.name),
    );

    if (filterByNumericValues) {
      filterByNumericValues.forEach((numFilter) => {
        const { column, comparison, value } = numFilter;
        filteredResult = filteredResult.filter(
          (planet) => {
            if (comparison === 'maior que') return planet[column] > Number(value);
            if (comparison === 'igual a') return planet[column] === value;
            return planet[column] < Number(value);
          },
        );
      });
    }
    setDataTable(filteredResult);
  }, [filters]); // deals with filters

  return (
    <starwarsContext.Provider
      value={ {
        dataTable,
        filters,
        setFilters,
        columns,
        setColumns,
      } }
    >
      { children }
    </starwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
