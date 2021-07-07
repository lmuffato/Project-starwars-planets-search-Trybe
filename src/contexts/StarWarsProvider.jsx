import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/serviceAPI';

const StarWarsContext = createContext();

const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets().then((requestPlanets) => {
      requestPlanets.forEach((planet) => delete planet.residents);
      setPlanets(requestPlanets);
    });
  }, []);

  const context = {
    planets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StarWarsProvider, StarWarsContext };
