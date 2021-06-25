import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

export default function MainProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fecthPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      setPlanets(data.results);
    };
    fecthPlanets();
  }, []);
  return (
    <MainContext.Provider value={ { planets } }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
