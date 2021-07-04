import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';
import DataContext from '../context/Context';

const Provider = ({ children }) => {
  const [data, setData] = useState([{}]);
  const [backup, setBackup] = useState([]);

  const apiData = async () => {
    const result = await api();
    setData(result.results);
  };

  useEffect(() => {
    apiData();
  }, []);

  const [filters, setFilters] = useState({
    filteredByName: { name: '' },
    filterByNumericValues: { column: '', comparison: '', number: '' } });

  return (
    <DataContext.Provider
      value={ { backup,
        data,
        setFilters,
        filters,
        setBackup } }
    >
      { children }
    </DataContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Provider;
