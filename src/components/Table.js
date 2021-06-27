import React, { useContext } from 'react';
import myContext from '../context/mycontext';

function Table() {
  const { data } = useContext(myContext);
  const resultNames = Object.keys(data[0]);
  const filtered = resultNames.filter((name) => name !== 'residents');
  return (
    <table>
      <tr>
        {filtered.map((name, index) => (
          <th key={ index }>{name}</th>
        ))}
      </tr>
      {data.map((planet) => (
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
      ))}
    </table>
  );
}

export default Table;
