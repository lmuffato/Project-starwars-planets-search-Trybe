import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import getPlanets from '../services/getPlanets';

const FILTER_INIT_STATE = {
  filters: {
    filterByName: { name: '' },
  }
};

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filter, setFilter] = useState(FILTER_INIT_STATE);

  useEffect(() => {
    const setThePlanets = async () => {
      const thePlanets = await getPlanets();
      setData([...thePlanets]);
      setLoading(false);
    };
    setThePlanets();
  }, []);

  const store = {
    data,
    isLoading,
    filter,
    setFilter,
  };

  return (
    <context.Provider value={ store }>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
