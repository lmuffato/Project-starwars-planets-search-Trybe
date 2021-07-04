// detalhe do proptypes visto no repositório do Mateus Alencar
// https://github.com/tryber/sd-010-a-project-starwars-planets-search/pull/90
import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import StarContext from '../context/StarContext';

function StarProvider({ children }) {
  const [planets, setPlanets] = useState([{}]);
  const [name, settingSearchedName] = useState('');
  // const settingSearchedName = (value) => setSearchName(value);
  const [filterByNumber, setfilterByNumber] = useState([]);

  useEffect(() => {
    filterByNumber.map((item) => {
      const { column, comparison, value } = item;
      switch (comparison) {
      case 'maior que':
        return setPlanets(
          [...planets.filter((planet) => Number(planet[column]) > Number(value))],
        );
      case 'menor que':
        return setPlanets(
          [...planets.filter((planet) => Number(planet[column]) < Number(value))],
        );
      case 'igual a':
        return setPlanets(
          [...planets.filter((planet) => Number(planet[column]) === Number(value))],
        );
      default:
        return planets;
      }
    });
  }, [filterByNumber]);

  const contextValue = {
    planets,
    settingSearchedName,
    setfilterByNumber,
    filters: { filterByName: { name } },
    filterByNumber,
  };

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
