import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FetchStarWars from '../services/FetchStarWars';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState('');
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
  const [clickedButtonFilters, setClickedButtonFilters] = useState(false);

  function getText({ target }) {
    setFilters({ ...filters,
      filterByName: {
        name: target.value,
      } });
  }

  function getNumericFilters(columFilter, comparisonFilter, valueFilter, clickedFilter) {
    setFilters({ ...filters,
      filterByNumericValues: [
        {
          column: columFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    });
    setClickedButtonFilters(clickedFilter);
  }

  useEffect(() => {
    FetchStarWars().then((resp) => setData(resp));
  }, []);

  const { filterByName, filterByNumericValues } = filters;
  return (
    <StarWarsContext.Provider
      value={
        { data,
          getText,
          filterByName,
          getNumericFilters,
          filterByNumericValues,
          clickedButtonFilters }
      }
    >
      { children }
    </StarWarsContext.Provider>

  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
