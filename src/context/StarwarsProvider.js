import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import starwarsContext from './starwarsContext';

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [numberOfFilters, setNumberOfFilters] = useState(0);
  const [usedOptions, setUsedOptions] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
    /*    {
        column: '',
        comparison: '',
        value: '',
      }, */
    ],
  });

  useEffect(() => {
    fetchApi()
      .then((result) => setData(result));
  }, []); // stores api data

  useEffect(() => {
    setDataTable(data);
  }, [data]); // puts data into a changeble state

  useEffect(() => {
    console.log('CHAMOU O USE EFFECT');
    const { filterByNumericValues, filterByName } = filters;
    console.log('FILTER BY NUMERIC VALUE', filterByNumericValues);
    let filteredResult = data.filter(
      (planet) => planet.name.includes(filterByName.name),
    );
    console.log('RESULT 1', filteredResult);

    if (filterByNumericValues) {
      filterByNumericValues.forEach((numFilter) => {
        const { column, comparison, value } = numFilter;
        filteredResult = filteredResult.filter(
          (planet) => {
            if (comparison === 'maior que') {
              console.log('TESTE 1', planet[column] > Number(value));
              return planet[column] > Number(value);
            }
            if (comparison === 'igual a') {
              console.log('TESTE 2', planet[column] === value);
              return planet[column] === value;
            }
            console.log('TESTE 3', planet[column] < Number(value));
            return planet[column] < Number(value);
          },
        );
      });
    }
    // }
    console.log('RESULT 2', filteredResult);
    setDataTable(filteredResult);
  }, [filters]); // deals with numeric filter

  /* useEffect(() => {
    setFilteredByName(!filters.filterByName.name);

    const filteredResult = data.filter(
      (planet) => planet.name.includes(filters.filterByName.name)
        && data.some((planetData) => planetData.name === planet.name),
    );
    setDataTable(filteredResult);
  }, [filters.filterByName]); // deals with name filter

  useEffect(() => {
    console.log('CHAMOU O USE EFFECT');
    const { filterByNumericValues } = filters;
    // const { column, comparison, value } = filters.filterByNumericValues[0];
    const dataToUse = filteredByName ? dataTable : data;
    // console.log(filters);

    filterByNumericValues.forEach((numFilter) => {
      const { column, comparison, value } = numFilter;
      const filteredResult = dataToUse.filter(
        (planet) => {
          if (comparison === 'maior que') return planet[column] > Number(value);
          if (comparison === 'igual a') return planet[column] === value;
          return planet[column] < Number(value);
        },
      );
      setDataTable(filteredResult);
    });
  }, [filters.filterByNumericValues]); // deals with numeric filter
 */
  return (
    <starwarsContext.Provider
      value={ {
        dataTable,
        filters,
        setFilters,
        numberOfFilters,
        setNumberOfFilters,
        usedOptions,
        setUsedOptions,
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
