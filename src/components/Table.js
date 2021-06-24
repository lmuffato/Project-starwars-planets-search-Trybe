import React, { useContext } from 'react';
import context from '../store/Context';
import '../style/Table.css';

function Table() {
  const { data, keys } = useContext(context);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {keys
              .filter((key) => key !== 'residents')
              .map((key) => <th key={ key }>{key}</th>)}
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}

export default Table;
