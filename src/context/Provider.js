import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  // const [filterData, setFilterData] = useState([]);

  const fetchApi = async () => {
    const result = await fetchPlanets();
    setData(result);
    // setFilterData(result);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  console.log(data);

  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
