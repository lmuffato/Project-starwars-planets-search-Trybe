import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import starwarsContext from './starwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
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
    console.log('INICIO SET DATA TABLE');
    setDataTable(data);
    console.log('FIM SET DATA TABLE');
  }, [data]);

  useEffect(() => {
    // const [column, comparison, value] = filters.filterByNumericValues;
    // setDataTable(data);
    console.log('CHAMOU MESMO ASSIM');
    console.log('FILTERS DEPOIS', filters);

    const filtredByNumber = false; // APAGAR
    const dataToUse = filtredByNumber ? dataTable : data;

    const filteredResult = dataToUse.filter(
      (planet) => planet.name.includes(filters.filterByName.name),
    );
    setDataTable(filteredResult);

    /*     if (column && comparison && value) {
      const filteredResult = dataTable.filter(
        (planet) => {
          if (comparison === 'maior que') {
            return planet[column] >= value;
          }
          if (comparison === 'igual') {
            return planet[column] === value;
          }
          return planet[column];
        },
      );
      setDataTable(filteredResult);
    } */
  }, [filters.filterByName]);

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
