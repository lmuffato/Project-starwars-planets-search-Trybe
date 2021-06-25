import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import fetchAPI from '../services/starWarsAPI';
import StarWarsContext from './starWarsContext';

function Provider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
  };

  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([planets]);
  // colocar o planets como estado inicial para que os planetas fossem filtrados, foi feito com ajuda da Elisa França

  const [filters, setFilters] = useState(INITIAL_STATE);

  useEffect(() => {
    fetchAPI().then((results) => setPlanets(results));
  }, []);

  useEffect(() => {
    const filtereds = planets.filter((planet) => (
      planet.name.includes(filters.filterByName.name)));
    setFilteredPlanets(filtereds);
  }, [filters, planets]);

  const contextValue = {
    setFilters,
    filteredPlanets,
    filters,
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
