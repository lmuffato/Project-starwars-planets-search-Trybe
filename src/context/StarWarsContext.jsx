import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchDataFromStarWarsAPI from '../services/starwarsAPI';

export const StarWarsContext = createContext({});

export function StarWarsContextProvider({ children }) {
  // const [state, setState] = useState({});
  const [swPlanets, setSWPlanets] = useState([]);
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
  };

  useEffect(() => {
    async function fetchApi() {
      await fetchDataFromStarWarsAPI().then((res) => setSWPlanets(res.results));
    }
    return () => fetchApi();
  }, []);

  /* An effect function must not return anything besides a function, which is used for clean-up.

    It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await MyAPI.getData(someId);
        // ...
      }
      fetchData();
    }, [someId]); // Or [] if effect doesn't need props or state

    Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching
        in StarWarsContextProvider (at App.js:8)
        in App (at App.test.js:37) */

  return (
    <StarWarsContext.Provider value={ contextVal }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
