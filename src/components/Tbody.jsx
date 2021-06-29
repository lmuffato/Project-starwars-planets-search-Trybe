import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Tbody() {
  const { planets } = useContext(StarWarsContext);

  return (
    <tbody>
      {planets.map((planet) => (
        <tr key={ planet.name }>
          <td>{planet.name}</td>
          <td>{Number(planet.rotation_period)}</td>
          <td>{Number(planet.orbital_period)}</td>
          <td>{Number(planet.diameter)}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films.map((film) => <li key={ film }>{film}</li>)}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>))}
    </tbody>
  );
}

export default Tbody;
