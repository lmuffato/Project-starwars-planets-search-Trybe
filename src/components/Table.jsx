import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function Table() {
  const { data } = useContext(MyContext);

  data.forEach((planet) => {
    delete planet.residents;
  });

  const lineTable = (planet) => (
    <tbody>
      <tr key={ planet.name }>
        <td data-testid="planet-name">
          {planet.name}
        </td>
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
        <td><a href={ planet.url }>{planet.url}</a></td>
      </tr>
    </tbody>
  );

  const lineHeadTable = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
    </thead>
  );

  return (
    <table>
      {lineHeadTable()}
      {data.map((planet) => lineTable(planet))}
    </table>
  );
}

export default Table;
