import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchDataFromStarWarsAPI, {
  dataWithoutResidents,
} from '../services/starwarsAPI';

export const StarWarsContext = createContext({});

export function StarWarsContextProvider({ children }) {
  const [swPlanets, setSWPlanets] = useState([]); // array inicial com todos os planetas da API
  const [isLoading, setLoading] = useState(true); // loading do fetch
  // const [filterByName, setFilterByName] = useState(''); // filtro 1 - por nome digitado no searchBar
  const [inputValue, setInputValue] = useState('');
  const [newArrayOfPlanets, setNewArrayOfPlanets] = useState([]); // novo array com filtros aplicados

  useEffect(() => {
    async function tryFetch() {
      const planets = await fetchDataFromStarWarsAPI();
      dataWithoutResidents(planets.results);
      setSWPlanets(planets.results);
      setLoading(false);
      console.log(planets.results);
    }
    tryFetch();
  }, []);

  // Filtra planetas por nome
  const filteredPlanets = (inputVal) => {
    setNewArrayOfPlanets(
      swPlanets.filter((planet) => (
        planet.name.toLowerCase().includes(inputVal.toLowerCase())
      )),
    );
  };

  const contextVal = {
    data: swPlanets,
    filters: {
      filterByName: {
        name: '',
      },
    },
    setSWPlanets,
    isLoading,
    inputValue,
    newArrayOfPlanets,
    setInputValue,
    filteredPlanets,
  };

  // const filtersByOtherParams = () => {

  // };

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
