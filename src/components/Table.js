import React, { useContext } from 'react';
import Context from '../context/Context';
import './Table.css';

function Table() {
  const { planets, name } = useContext(Context);

  const filter = () => {
    const search = name.toLowerCase();
    let filteredPlanets = planets;
    if (name === '') {
      filteredPlanets = planets;
    } else if (search !== '') {
      filteredPlanets = planets.filter((planet) => (
        planet.name.toLowerCase().includes(search)));
    }
    return filteredPlanets;
  };

  return (
    <>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {
          filter().map((planet, index) => (
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
          ))
        }
      </tbody>
    </>
  );
}

export default Table;
