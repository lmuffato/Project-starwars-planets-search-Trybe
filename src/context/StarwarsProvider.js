import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import starwarsContext from './starwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  // const [filteredByNumber, setFilteredByNumber] = useState(false);
  const [filteredByName, setFilteredByName] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    fetchApi()
      .then((result) => setData(result));
  }, []);

  useEffect(() => {
    setDataTable(data);
  }, [data]);

  useEffect(() => {
    setFilteredByName(!filters.filterByName.name);

    const filteredResult = data.filter(
      (planet) => planet.name.includes(filters.filterByName.name)
        && data.some((planetData) => planetData.name === planet.name),
    );
    setDataTable(filteredResult);
  }, [filters.filterByName]);

  useEffect(() => {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    const dataToUse = filteredByName ? dataTable : data;

    const filteredResult = dataToUse.filter(
      (planet) => {
        if (comparison === 'maior que') return planet[column] > Number(value);
        if (comparison === 'igual a') return planet[column] === value;
        return planet[column] < Number(value);
      },
    );
    setDataTable(filteredResult);
  }, [filters.filterByNumericValues]);

  return (
    <starwarsContext.Provider value={ { dataTable, filters, setFilters } }>
      { children }
    </starwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
