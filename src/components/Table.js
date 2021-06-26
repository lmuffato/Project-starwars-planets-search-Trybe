import React, { useContext } from 'react';
import AppContext from '../context/Context';

function Table() {
  const { data, keys } = useContext(AppContext);
  console.log(keys);
  const xablau = keys.filter((key) => key !== 'residents');
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {xablau.map((k) => <th key={ k }>{ k }</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.url}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
