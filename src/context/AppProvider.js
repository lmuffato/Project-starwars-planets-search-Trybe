import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import fetchByApi from '../services/planetsApi';

export default function AppProvider({ children }) {
  const [dataColumn, setDataColumn] = useState([]);
  const [dataRow, setDataRow] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  function filteredByName(name) {
    setFilters({
      ...filters,
      filterByName: {
        name,
      },
    });
  }

  function filterByNumericValues(filter) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filter,
      ],
    });
  }

  function removeFilter(name) {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues.filter((filter) => filter.column !== name),
      ],
    });
  }

  function filterByOrder({ column = filters.order.column, sort = filters.order.sort }) {
    setFilters({
      ...filters,
      order: {
        column,
        sort,
      },
    });
  }

  useEffect(() => {
    fetchByApi()
      .then((
        res,
      ) => setDataColumn(Object.keys(res[0]).filter((key) => key !== 'residents')));
    fetchByApi()
      .then((res) => setDataRow(res));
  }, []);

  const context = {
    dataRow,
    dataColumn,
    filterByNumericValues,
    filters,
    removeFilter,
    setDataColumn,
    setDataRow,
    setFilters,
    filteredByName,
    filterByOrder,
  };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
