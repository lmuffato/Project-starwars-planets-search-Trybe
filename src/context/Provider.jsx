import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

import starWarsApi from '../services/starWarsApi';

import Context from './Context';

const INITIAL_FILTER = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTER);
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
    <Context.Provider value={ { isLoading, data, filters, setFilters } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
