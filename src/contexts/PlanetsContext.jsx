import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';

export const PlanetsContext = createContext();

export function PlanetsProvider({ children }) {
  const [initialPlanets, setInitialPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [tableHeads, setTableHeads] = useState([]);
  const [columnsToSelect, setColumnsToSelect] = useState([]);
  const [textFilter, setTextFilter] = useState('');

  async function getPlanets() {
    const planetsResults = await fetchPlanets();
    setInitialPlanets(planetsResults);
    setPlanets(planetsResults);
  }

  function getTableHeads(planetsFromApi) {
    const firstPlanetKeys = Object.keys(planetsFromApi[0]);
    setTableHeads(firstPlanetKeys);
  }

  function getColumnsToSelect(tableHeadsFromState) {
    const options = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const heads = tableHeadsFromState.filter((head) => options.includes(head));
    setColumnsToSelect(heads);
  }

  function filterByText(filter) {
    const filteredPlanets = initialPlanets.filter(
      (planet) => planet.name.toLowerCase().includes(filter.toLowerCase()),
    );
    setPlanets(filteredPlanets);
    setTextFilter(filter);
  }

  function filterByComparisons(event, { column, comparison, value }) {
    event.preventDefault();

    const planetsWithTextFilter = initialPlanets.filter(
      (planet) => planet.name.toLowerCase().includes(textFilter.toLowerCase()),
    );

    let filteredPlanets = [];
    if (comparison === '+') {
      filteredPlanets = planetsWithTextFilter.filter(
        (planet) => Number(planet[column]) > Number(value),
      );
    } else if (comparison === '-') {
      filteredPlanets = planetsWithTextFilter.filter(
        (planet) => Number(planet[column]) < Number(value),
      );
    } else {
      filteredPlanets = planetsWithTextFilter.filter(
        (planet) => Number(planet[column]) === Number(value),
      );
    }

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

  useEffect(() => {
    const headsWereLoaded = tableHeads.length > 0;

    if (headsWereLoaded) {
      getColumnsToSelect(tableHeads);
    }
  }, [tableHeads]);

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        tableHeads,
        columnsToSelect,
        filterByText,
        filterByComparisons,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
