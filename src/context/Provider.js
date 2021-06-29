import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import requestAPI from '../services/requestAPI';
import context from './context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {name: ''},
    filterByNumericValues: { column: '', comparison: '', value: ''},
  });
  const [dataToUse, setDataToUse] = useState([])
  const [dataToSelect, setDataToSelect] = useState([])
  const contextValue = {
    data,
    setData,
    filters,
    setFilters,
    dataToUse,
    setDataToUse,
    dataToSelect,
    setDataToSelect,
  };

  useEffect(() => {
    requestAPI().then(({ results }) => setData(results));
  }, []);

 
  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired, // Segundo dica do coruja no plantão de revisão;
};

export default Provider;
