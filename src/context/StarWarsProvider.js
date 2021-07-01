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
    filterByNumericValues: [],
  });
  const [clickedButtonFilters, setClickedButtonFilters] = useState(false);
  const [showColumnFilter, setShowColumnFilter] = useState('');
  const { filterByName, filterByNumericValues } = filters;

  function getText({ target }) {
    setFilters({ ...filters,
      filterByName: {
        name: target.value,
      } });
  }

  function getNumericFilters(columFilter, comparisonFilter, valueFilter, clickedFilter) {
    setFilters({ ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column: columFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    });
    setClickedButtonFilters(clickedFilter);
  }

  function deletNumericFilter(columnFilter, arrayPosition) {
    const arrFilter = [...filterByNumericValues];
    arrFilter.splice(arrayPosition, 1);
    setFilters({ ...filters,
      filterByNumericValues: [...arrFilter],
    });
    setShowColumnFilter(columnFilter);
  }

  useEffect(() => {
    FetchStarWars().then((resp) => setData(resp));
  }, []);

  return (
    <StarWarsContext.Provider
      value={
        { data,
          getText,
          filterByName,
          getNumericFilters,
          filterByNumericValues,
          clickedButtonFilters,
          deletNumericFilter,
          showColumnFilter }
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
