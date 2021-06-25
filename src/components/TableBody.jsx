import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

export default function TableBody() {
  const { planets } = useContext(MainContext);

  if (planets.length === 0) {
    return 'Loading...';
  }
  console.log(planets);

  return (
    <tbody>
      {planets.map((planet) => (
        <tr key={ planet.diameter }>
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
