import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import context from './context';

import getPlanets from '../services/fetchApis';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // getPlanets().then((data) => setPlanets(data));
    const fetchPlanetsApi = async () => {
      const planets = await getPlanets();
      setIsLoading(true);

      setData(planets.results);

      setIsLoading(false);
    };

    fetchPlanetsApi();
  }, []);

  // console.log('dataApi', data);

  const contextValue = {
    data,
    setData,
  };

  if (isLoading) return <span>Loading...</span>;

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
