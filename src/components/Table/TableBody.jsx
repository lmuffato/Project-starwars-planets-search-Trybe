import React from 'react';
import useFilters from '../../hooks/useFilters';
import usePlanets from '../../hooks/usePlanets';

export default function TableBody() {
  const { results: planets } = usePlanets();
  const { filters } = useFilters();
  const nameFilter = filters.filterByName.name;

  const filteredPlanets = planets.filter((planet) => planet.name.includes(nameFilter));

  return (
    <tbody>
      {filteredPlanets.map((planet) => (
        <tr key={ planet.name }>
          <td>{planet.name}</td>
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
