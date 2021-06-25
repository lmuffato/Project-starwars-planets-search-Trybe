import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

export default function TableBody() {
  const { planets, filters: { filterByName: { name } } } = useContext(MainContext);
  const filteredPlanetsByName = name !== ''
    ? planets.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()))
    : planets;

  if (planets.length === 0) {
    return 'Loading...';
  }

  return (
    <tbody>
      {filteredPlanetsByName.map((planet) => (
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
          <td>{planet.created}</td>
          <td>{planet.residents[0]}</td>
          <td>{planet.edited}</td>
          <td>{planet.films[0]}</td>
        </tr>
      ))}
    </tbody>
  );
}
