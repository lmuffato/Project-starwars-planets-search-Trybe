import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './Context';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      names: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((gokuSSJGod) => gokuSSJGod.json());
      setData(results);
    };
    getPlanets();
  }, []);

  function nameFilter(names) {
    setFilters({
      ...filters,
      filterByName: {
        names,
      },
    });
  }
  function numericFilter(filter) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filter,
      ],
    });
  }

  function removeFilter(names) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues.filter((filter) => filter.column !== names),
      ],
    });
  }

  return (
    <context.Provider
      value={ { data,
        filters,
        setFilters,
        filtered,
        setFiltered,
        nameFilter,
        numericFilter,
        removeFilter,
      } }
    >
      { children }
    </context.Provider>
  );
}
TableProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TableProvider;
