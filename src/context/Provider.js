import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import requestAPI from '../services/requestAPI';
import context from './context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('')
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });
  const [selects, setSelects] = useState({
    filerByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });
  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
    selects,
    setSelects,
    name,
    setName,
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
