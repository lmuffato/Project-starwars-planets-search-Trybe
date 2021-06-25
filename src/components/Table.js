import React, { useState, useEffect, useContext } from 'react';
import context from '../context/context';

function Table() {
  const [isLoading, setIsLoading] = useState(true);
  const { planets, getPlanets } = useContext(context);

  useEffect(() => {
    getPlanets()
      .then(setIsLoading(false));
  }, []);

  if (isLoading === true) {
    console.log(planets);
    return <h1>loading</h1>;
  }

  return (
    <table>
      <tr>
        <th>name</th>
        <th>rotation period</th>
        <th>orbital period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface water</th>
        <th>population</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
        <th>url</th>
      </tr>

      { planets.map((planet, index) => (
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
      )) }

    </table>
  );
}

export default Table;
