// requisito feito com ajuda do colega Nilson Ribeiro.
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import PlanetsFromApi from '../PlanetsFromApi';
import ContextApi from './ContextApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [name, setSearchedName] = useState('');
  const toSetSearchedName = (value) => setSearchedName(value);

  const contextValue = {
    data,
    keys,
    toSetSearchedName,
    filters: { filterByName: { name } },
  };
  useEffect(() => {
    PlanetsFromApi().then(({ results }) => setData(results));
  }, []);
  useEffect(() => {
    if (data.length !== 0) {
      const keysLength = Object.keys(data[0]);
      setKeys(keysLength);
    }
  }, [data]);

  return (
    <ContextApi.Provider value={ contextValue }>
      {children}
    </ContextApi.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
