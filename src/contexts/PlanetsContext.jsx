import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';

export const PlanetsContext = createContext();

export function PlanetsProvider({ children }) {
  const [initialPlanets, setInitialPlanets] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [tableHeads, setTableHeads] = useState([]);
  const [columnsToSelect, setColumnsToSelect] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  async function getPlanets() {
    const planetsResults = await fetchPlanets();
    setInitialPlanets(planetsResults);
    setPlanets(planetsResults);
  }

  function getTableHeads(planetsFromApi) {
    const firstPlanetKeys = Object.keys(planetsFromApi[0]);
    setTableHeads(firstPlanetKeys);
  }

  function filterByText(filter) {
    setFilters({ ...filters, filterByName: { name: filter } });

    const filteredPlanets = initialPlanets.filter(
      (planet) => planet.name.toLowerCase().includes(filter.toLowerCase()),
    );

    setPlanets(filteredPlanets);
  }

  function filterByComparisons(event, { column, comparison, value }) {
    event.preventDefault();

    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  }

  function removeFilter(column) {
    const updatedFilters = filters.filterByNumericValues.filter(
      (filter) => filter.column !== column,
    );

    setFilters({
      ...filters,
      filterByNumericValues: updatedFilters,
    });
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
    function getColumnsToSelect(tableHeadsFromState) {
      let options = [
        'population',
        'orbital_period',
        'diameter',
        'rotation_period',
        'surface_water',
      ];

      filters.filterByNumericValues.forEach((filter) => {
        const columnSelected = filter.column;
        options = options.filter((option) => option !== columnSelected);
      });

      const heads = tableHeadsFromState.filter((head) => options.includes(head));
      setColumnsToSelect(heads);
    }

    const headsWereLoaded = tableHeads.length > 0;

    if (headsWereLoaded) {
      getColumnsToSelect(tableHeads);
    }
  }, [filters.filterByNumericValues, tableHeads]);

  useEffect(() => {
    function filterPlanets() {
      const { filterByName: { name: nameFilter }, filterByNumericValues } = filters;

      let filteredPlanets = [];

      filteredPlanets = initialPlanets.filter(
        (planet) => planet.name.toLowerCase().includes(nameFilter.toLowerCase()),
      );

      if (filterByNumericValues.length > 0) {
        filterByNumericValues.forEach((filter) => {
          if (filter.comparison === 'maior que') {
            filteredPlanets = filteredPlanets.filter(
              (planet) => Number(planet[filter.column]) > Number(filter.value),
            );
          } else if (filter.comparison === 'menor que') {
            filteredPlanets = filteredPlanets.filter(
              (planet) => Number(planet[filter.column]) < Number(filter.value),
            );
          } else {
            filteredPlanets = filteredPlanets.filter(
              (planet) => Number(planet[filter.column]) === Number(filter.value),
            );
          }
        });
      }

      setPlanets(filteredPlanets);
    }

    filterPlanets();
  }, [filters, initialPlanets]);

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        tableHeads,
        columnsToSelect,
        filterByText,
        filterByComparisons,
        filters,
        removeFilter,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
