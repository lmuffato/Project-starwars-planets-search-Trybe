import React from 'react';
import useFilters from '../../hooks/useFilters';
import usePlanets from '../../hooks/usePlanets';

import numericFilterCategories from '../../helpers/numericFilterCategories';

export default function TableBody() {
  const { results: planets } = usePlanets();
  const { filters, nameFilter, numericFilter, sortPlanets } = useFilters();
  const { name } = filters.filterByName;
  const numericFilters = filters.filterByNumericValues;
  const sortOptions = filters.order;

  // Apply name filter
  const NameFilteredPlanets = nameFilter(planets, name);

  // Apply numeric filter
  const NumericFilteredPlanets = numericFilter(NameFilteredPlanets, numericFilters);

  // Apply sorting
  const sortedPlanets = sortPlanets(
    NumericFilteredPlanets,
    sortOptions,
    numericFilterCategories,
  );

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
