import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import context from './context';
import getPlanets from '../services/getPlanets';

const NUM_FILTER_INIT = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [numFilter, setNumFilter] = useState(NUM_FILTER_INIT);

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
    numFilter,
    setNumFilter,
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
