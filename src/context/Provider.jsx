import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

import starWarsApi from '../services/starWarsApi';

import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const planetsList = await starWarsApi();
        setData(planetsList);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPlanets();
  }, []);

  return (
    <Context.Provider value={ { isLoading, data } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
