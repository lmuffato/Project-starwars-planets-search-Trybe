import React from 'react';
import useFilters from '../../hooks/useFilters';
import usePlanets from '../../hooks/usePlanets';

import numericFilterCategories from '../../helpers/numericFilterCategories';

function nameFilter(planets, name) {
  return planets.filter((planet) => planet.name.includes(name));
}

function numericFilter(planets, numericFilters) {
  numericFilters.forEach((numFilter) => {
    planets = planets.filter((planet) => {
      switch (numFilter.comparison) {
      case 'maior que':
        return planet[numFilter.column] > parseFloat(numFilter.value);
      case 'menor que':
        return planet[numFilter.column] < parseFloat(numFilter.value);
      case 'igual a':
        return planet[numFilter.column] === numFilter.value;
      default:
        return false;
      }
    });
  });

  return planets;
}

function sortPlanets(planets, sortOptions) {
  const columnSort = sortOptions.column;
  const sortType = sortOptions.sort;
  const isNumeric = numericFilterCategories.includes(columnSort);
  const NEGATIVE = -1;

  function numericSort(a, b) {
    if (sortType === 'ASC') {
      return a[columnSort] - b[columnSort];
    }
    return b[columnSort] - a[columnSort];
  }

  function alphabeticSort(a, b) {
    if (sortType === 'ASC') {
      if (a[columnSort] > b[columnSort]) return 1;
      return NEGATIVE;
    }
    if (a[columnSort] > b[columnSort]) return NEGATIVE;
    return 1;
  }

  return planets.sort(
    isNumeric ? numericSort : alphabeticSort,
  );
}

export default function TableBody() {
  const { results: planets } = usePlanets();
  const { filters } = useFilters();
  const { name } = filters.filterByName;
  const numericFilters = filters.filterByNumericValues;
  const sortOptions = filters.order;

  // Apply name filter
  const NameFilteredPlanets = nameFilter(planets, name);

  // Apply numeric filter
  const NumericFilteredPlanets = numericFilter(NameFilteredPlanets, numericFilters);

  // Apply sorting
  const sortedPlanets = sortPlanets(NumericFilteredPlanets, sortOptions);

  return (
    <tbody>
      {sortedPlanets.map((planet) => (
        <tr key={ planet.name }>
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}
