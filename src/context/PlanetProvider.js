import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

const PlanetProvider = ({ children }) => {
  const apiURL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [data, setData] = useState(['loading']);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch(apiURL);
      const dataJson = await response.json();
      setData(dataJson.results);
    };
    getPlanets();
  }, []);

  return (
    <PlanetContext.Provider value={ { data, setData } }>
      {children}
    </PlanetContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetProvider;
