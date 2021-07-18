import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import { fetchByColumn, fetchByRow } from '../services/planetsApi';

export default function AppProvider({ children }) {
  const [newData, setNewData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filterColumn, setFilterColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [valueNumber, setValueNumber] = useState(0);
  const [dataColumn, setDataColumn] = useState([]);
  const [dataRow, setDataRow] = useState([]);

  useEffect(() => {
    fetchByColumn()
      .then((res) => setDataColumn(res));
    fetchByRow()
      .then((res) => setDataRow(res));
  }, []);

  const context = {
    newData,
    dataRow,
    dataColumn,
    filterText,
    filterColumn,
    comparison,
    valueNumber,
    setNewData,
    setDataColumn,
    setDataRow,
    setFilterText,
    setFilterColumn,
    setComparison,
    setValueNumber,
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
