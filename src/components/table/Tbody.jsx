import React from 'react';
import usePlanet from '../../hooks/usePlanet';

export default function Tbody() {
  const { planets, filter } = usePlanet();
  const { filters: { filterByName: { name } } } = filter;

  const FilterPlanetsByName = planets
    .filter((planet) => (planet.name.includes(name)));

  return (
    <tbody>
      {FilterPlanetsByName.map((planet, index) => (
        <tr key={ index }>
          <td>{planet.name}</td>
          <td>{planet.rotationPeriod}</td>
          <td>{planet.orbitalPeriod}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surfaceWater}</td>
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
