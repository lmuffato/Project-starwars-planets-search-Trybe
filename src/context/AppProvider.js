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
    setDataColumn,
    setDataRow,
    setFilters,
    filteredByName,
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
