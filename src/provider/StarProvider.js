// detalhe do proptypes visto no repositório do Mateus Alencar
// https://github.com/tryber/sd-010-a-project-starwars-planets-search/pull/90
import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import StarContext from '../context/StarContext';

function StarProvider({ children }) {
  const [planets, setPlanets] = useState([{}]);
  const [name, setSearchName] = useState('');
  const [keys, setKeys] = useState([]);
  const settingSearchedName = (value) => setSearchName(value);

  const contextValue = {
    planets,
    keys,
    settingSearchedName,
    filters: { filterByName: { name } },
  };

  useEffect(() => {
    if (planets.length !== 0) {
      const lengthOfKeys = Object.keys(planets[0]);
      setKeys(lengthOfKeys);
    }
  }, [planets]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const newResponse = await response.json();
      setPlanets(newResponse.results);
    };
    getPlanets();
  }, []);

  return (
    <StarContext.Provider value={ contextValue }>
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: node,
}.isRequired;

export default StarProvider;
