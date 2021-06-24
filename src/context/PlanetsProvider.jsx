import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import services from '../services/api';

import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [keys, setKeys] = useState([]);
  const [filterName, setFilterName] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    (async () => {
      const fetchPlanets = await services.fetchPlanets();
      setPlanets(fetchPlanets);
    })();
  }, []);

  useEffect(() => {
    if (planets.length > 0) {
      const getKeys = Object.keys(planets[0]);
      setKeys(getKeys);
    }
  }, [planets]);

  const filteredPlanets = planets
    .filter((planet) => planet.name.includes(filterName.filterByName.name));
  console.log(filteredPlanets);

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        keys,
        setPlanets,
        filterName,
        setFilterName,
        filteredPlanets } }
    >
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default PlanetsProvider;
