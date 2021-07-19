import React, { useState, useEffect } from 'react';
import { element } from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/API';

function StarWarsProvider({ children }) {
  const [originalPlanets, setOriginalPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [input, setInput] = useState('');

  async function fetchPlanets() {
    const fetchedPlanets = await getPlanets();
    setOriginalPlanets(fetchedPlanets);
    setFilteredPlanets(fetchedPlanets);
    setLoaded(true);
  }

  useEffect(() => {
    setFilteredPlanets(originalPlanets.filter((planet) => planet.name.includes(input)));
  }, [input]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const consumer = {
    filteredPlanets,
    loaded,
    input,
    setInput,
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
