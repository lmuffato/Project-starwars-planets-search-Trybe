import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import getPlanets from '../services/getPlanets';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const setThePlanets = async () => {
      const thePlanets = await getPlanets();
      setData([...thePlanets]);
      setFilterData([...thePlanets]);
      setLoading(false);
    };
    setThePlanets();
  }, []);

  const store = {
    data,
    isLoading,
    filterData,
    setFilterData,
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
