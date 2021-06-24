import React, { useState } from 'react';
import PropTypes from 'prop-types';

import getStarWarsPlanets from './services/starWarsApi';
import StartWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  const getPlanets = async () => {
    const planets = await getStarWarsPlanets();
    const filtered = planets.filter((planet) => delete planet.residents);
    setData(filtered);
  };

  return (
    <StartWarsContext.Provider value={ { data, getPlanets } }>
      {children}
    </StartWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarWarsProvider;
