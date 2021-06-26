import React from 'react';
import usePlanet from '../../hooks/usePlanet';

export default function Tbody() {
  const { planets, filteredByName, filteredByNumbers } = usePlanet();
  const { filters: { filterByName: { name } } } = filteredByName;
  const { filterByNumericValues } = filteredByNumbers;

  function FilterPlanetsByName() {
    let filtered = planets
      .filter((planet) => (planet.name.toLowerCase().includes(name.toLowerCase())));
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        filtered = filtered.filter((planet) => {
          switch (comparison) {
          case 'igual a':
            return +planet[column] === +value;
          case 'maior que':
            return +planet[column] > +value;
          case 'menor que':
            return +planet[column] < +value;
          default:
            return planets;
          }
        });
      });
    }
    return filtered;
  }

  return (
    <tbody>
      {FilterPlanetsByName().map((planet, index) => (
        <tr key={ index }>
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
