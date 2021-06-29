// detalhe do proptypes visto no repositório do Mateus Alencar
// https://github.com/tryber/sd-010-a-project-starwars-planets-search/pull/90
import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import StarContext from '../context/StarContext';

function StarProvider({ children }) {
  const [planets, setPlanets] = useState([{}]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const newResponse = await response.json();
      setPlanets(newResponse.results);
    };
    getPlanets();
  }, []);

  return (
    <StarContext.Provider
      value={ {
        planets,
        setPlanets,
      } }
    >
      {children}
    </StarContext.Provider>
  );
}

StarProvider.propTypes = {
  children: node,
}.isRequired;

export default StarProvider;
