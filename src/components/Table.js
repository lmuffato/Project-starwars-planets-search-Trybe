import React, { useContext } from 'react';
import myContext from '../context/mycontext';

function Table() {
  const { data,
    backup } = useContext(myContext);
  const resultNames = Object.keys(data[0]);
  const filtered = resultNames.filter((name) => name !== 'residents');
  const renderizePlanets = (array) => array.map((planet) => (
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
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  ));
  return (
    <div>
      <table>
        <tr>
          {filtered.map((text, index) => (
            <th key={ index }>{text}</th>
          ))}
        </tr>
        {backup.length === 0 ? renderizePlanets(data) : renderizePlanets(backup)}
      </table>
    </div>
  );
}

export default Table;
