import React, { useContext, useEffect, useCallback } from 'react';
import { filters as filterContext, data } from '../contexts/starWars';
import FilterByName from './filters/FilterByName';
import FilterByNumericValues from './filters/FilterByNumericValues';

export default function Filters() {
  const { planets } = useContext(data);
  const {
    filters: { filterByName, filterByNumericValues },
    setFilteredPlanets,
  } = useContext(filterContext);

  const filterPlanetsByNumericValues = useCallback(
    (arrayToFilter) => {
      const { comparison, collumn, value } = filterByNumericValues[0];
      if (comparison === 'maior que') {
        return arrayToFilter.filter(
          (planet) => planet[collumn] > Number(value),
        );
      }
      if (comparison === 'menor que') {
        return arrayToFilter.filter(
          (planet) => planet[collumn] < Number(value),
        );
      }
      if (comparison === 'igual a') {
        return arrayToFilter.filter(
          (planet) => planet[collumn] === Number(value),
        );
      }
    },
    [filterByNumericValues],
  );

  useEffect(() => {
    const filteredByName = planets.filter(({ name }) => name
      .toLowerCase()
      .includes(filterByName.name));
    setFilteredPlanets(filteredByName);
    if (filterByNumericValues.length) {
      if (filteredByName) {
        setFilteredPlanets(filterPlanetsByNumericValues(filteredByName));
      } else {
        setFilteredPlanets(filterPlanetsByNumericValues(planets));
      }
    }
  }, [
    planets,
    filterByName.name,
    setFilteredPlanets,
    filterByNumericValues,
    filterPlanetsByNumericValues,
  ]);

  return (
    <div className="filters-container">
      <FilterByName />
      <FilterByNumericValues />
    </div>
  );
}
