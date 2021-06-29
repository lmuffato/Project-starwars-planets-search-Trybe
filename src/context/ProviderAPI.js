import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ContextAPI from './ContextAPI';
import fetchAPI from '../Services/FetchAPI';

function ProviderAPI({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [resultsApi, setResultsApi] = useState([]);

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  useEffect(() => {
    setIsLoading(true);
    const getApi = async () => {
      const results = await fetchAPI();
      setResultsApi(results);
    };
    setIsLoading(false);
    getApi();
  }, []);

  useEffect(() => {
    function filterData() {
      const { filterByNumericValues } = filter;
      if (filterByNumericValues !== undefined) {
        filterByNumericValues.map((element) => {
          const { column, comparison, value } = element;
          switch (comparison) {
          case 'maior que':
            return setResultsApi([...resultsApi
              .filter((planet) => Number(planet[column]) > Number(value))]);
          case 'menor que':
            return setResultsApi([...resultsApi
              .filter((planet) => Number(planet[column]) < Number(value))]);
          case 'igual a':
            return setResultsApi([...resultsApi
              .filter((planet) => Number(planet[column]) === Number(value))]);
          default:
            return resultsApi;
          }
        });
      }
    }
    filterData();
  }, [filter]);
  // obtive ajuda do colega Perycles na resolução deste requisito.

  const [filterColumn, setFilterColumn] = useState('');
  const [filterComparison, setFilterComparison] = useState('');
  const [filterValue, setFilterValue] = useState('');

  function handleChange({ target }) {
    setFilter({
      filters: {
        filterByName: {
          name: target.value,
        },
      },
    });
  }

  function handleClick() {
    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          column: filterColumn,
          comparison: filterComparison,
          value: filterValue,
        },
      ],
    });
  }

  return (
    <ContextAPI.Provider
      value={ { resultsApi,
        isLoading,
        handleChange,
        filter,
        setFilterColumn,
        setFilterComparison,
        setFilterValue,
        handleClick,
      } }
    >
      {children}
    </ContextAPI.Provider>
  );
}

ProviderAPI.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderAPI;
