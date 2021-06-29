import React from 'react';
import filtersPlanets from '../../utils/filtersPlanets';
import usePlanet from '../../hooks/usePlanet';
import orderColumn from '../../utils/orderColumn';

export default function Tbody() {
  const { planets, filteredByName, filteredByNumbers, order } = usePlanet();

  const { filters: { filterByName: { name } } } = filteredByName;
  const { filterByNumericValues } = filteredByNumbers;
  const { order: { column, sort } } = order;

  const planetsFiltered = filtersPlanets(planets, filterByNumericValues, name);

  if (planetsFiltered.length > 0) {
    orderColumn(planetsFiltered, sort, column);
  }
  // console.log(planetsOrdered);

  return (
    <tbody>
      {planetsFiltered.map((planet, index) => (
        <tr key={ index }>
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
