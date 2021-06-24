import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import fetchAPI from '../services/starWarsAPI';
import StarWarsContext from './starWarsContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetchAPI().then((results) => setPlanets(results));
  }, []);

  useEffect(() => {
    if (planets.length > 0) {
      const getNames = Object.keys(planets[0]);
      setNames(getNames);
    }
  }, [planets]);

  const contextValue = {
    planets,
    names,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: object,
}.isRequired;

export default Provider;
