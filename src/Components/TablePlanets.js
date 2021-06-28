// requisito feito com ajuda do colega Nilson Ribeiro.
import React, { useContext } from 'react';
import ContextApi from './ContextApi';

function TablePlanets() {
  const { data,
    filters: { filterByName: { name } },
  } = useContext(ContextApi);
  if (name !== '') {
    const search = data.filter((planets) => planets.name
      .toLowerCase().includes(name));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Diameter</th>
            <th>Gravity</th>
            <th>Climate</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Terrain</th>
            <th>Edited</th>
            <th>Created</th>
            <th>Film</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {search.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.diameter}</td>
              <td>{planet.gravity}</td>
              <td>{planet.climate}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.terrain}</td>
              <td>{planet.edited}</td>
              <td>{planet.created}</td>
              <td>{planet.films}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Gravity</th>
            <th>Climate</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Terrain</th>
            <th>Film</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.created}</td>
              <td>{planet.diameter}</td>
              <td>{planet.edited}</td>
              <td>{planet.gravity}</td>
              <td>{planet.climate}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.terrain}</td>
              <td>{planet.films}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePlanets;
