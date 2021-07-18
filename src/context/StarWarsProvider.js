import React, { useState, useEffect } from 'react';
import { element } from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/API';

function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  async function fetchPlanets() {
    const fetchedPlanets = await getPlanets();
    setPlanets(fetchedPlanets);
    setLoaded(true);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const consumer = {
    planets,
    loaded,
  };

  return (
    <StarWarsContext.Provider value={ { ...consumer } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: element.isRequired,
};

export default StarWarsProvider;
