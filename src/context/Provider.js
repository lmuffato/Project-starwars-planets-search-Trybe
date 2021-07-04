import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getApi from '../services/getApi';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [getFilter, setGetFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getApi().then((result) => setData(result));
  }, []);

  useEffect(() => {
    setFiltered(data);
    if (getFilter.filterByName.name) {
      const filteredResult = data.filter(
        (planet) => planet.name.toLowerCase().includes(getFilter.filterByName.name),
      );
      setFiltered(filteredResult);
    }
  }, [data, getFilter.filterByName.name]);

  // Ajuda com a solução da Beatriz Estebanez - T10A
  return (
    <Context.Provider value={ { filtered, getFilter, setGetFilter } }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
