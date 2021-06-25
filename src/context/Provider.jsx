import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

import starWarsApi from '../services/starWarsApi';

import Context from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const planetsList = await starWarsApi();
        setPlanets(planetsList);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPlanets();
  }, []);

  return (
    <Context.Provider value={ { isLoading, planets } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
