import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';

export const PlanetsContext = createContext();

export function PlanetsProvider({ children }) {
  const [initialPlanets, setInitialPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [tableHeads, setTableHeads] = useState([]);

  async function getPlanets() {
    const planetsResults = await fetchPlanets();
    setInitialPlanets(planetsResults);
    setPlanets(planetsResults);
  }

  function getTableHeads(planetsFromApi) {
    let firstPlanetKeys = Object.keys(planetsFromApi[0]);
    firstPlanetKeys = firstPlanetKeys.map((key) => {
      const capitalizedFirstLetter = key[0].toUpperCase();
      const restOfTheWord = key.slice(1);
      return (capitalizedFirstLetter + restOfTheWord).replace('_', ' ');
    });
    setTableHeads(firstPlanetKeys);
  }

  function filterByText(filter) {
    const filteredPlanets = initialPlanets.filter(
      (planet) => planet.name.toLowerCase().includes(filter.toLowerCase()),
    );
    setPlanets(filteredPlanets);
  }

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    const planetsWereLoaded = planets.length > 0;

    if (planetsWereLoaded) {
      getTableHeads(planets);
    }
  }, [planets]);

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        tableHeads,
        filterByText,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
