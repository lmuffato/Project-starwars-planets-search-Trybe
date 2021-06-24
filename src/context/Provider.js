import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPlanets().then(({ results }) => setData(results));
  }, [setData]);

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
