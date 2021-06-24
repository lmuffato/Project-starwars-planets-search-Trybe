import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchDataFromStarWarsAPI from '../services/starwarsAPI';

export const StarWarsContext = createContext({});

export function StarWarsContextProvider({ children }) {
  // const [state, setState] = useState({});
  const [swPlanets, setSWPlanets] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [name, setName] = useState('');

  const contextVal = {
    data: swPlanets,
    filters: {
      filterByName: {
        name,
      },
    },
    setSWPlanets,
    setName,
    isLoading,
  };

  useEffect(() => {
    async function tryFetch() {
      const planets = await fetchDataFromStarWarsAPI();
      setSWPlanets(planets.results);
      setLoading(false);
      console.log(planets.results);
    }
    tryFetch();
  }, []);

  return (
    <StarWarsContext.Provider value={ contextVal }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// https://fb.me/react-hooks-data-fetching
