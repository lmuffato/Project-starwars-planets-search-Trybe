import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import requestAPI from '../services/requestAPI';
import context from './context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  const contextValue = {
    data,
    setData,
    filter,
    setFilter,
  };

  useEffect(() => {
    requestAPI().then(({ results }) => setData(results));
  }, [data]);

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
