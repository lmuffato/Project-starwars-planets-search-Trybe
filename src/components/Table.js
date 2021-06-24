import React, { useContext } from 'react';

import TableHead from './TableHead';
import planetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filters: { filterByName: { name } } } = useContext(planetsContext);
  const planets = name !== '' ? data.filter((e) => e.name === name) : data;
  return (
    <table>
      {TableHead()}
      <tbody>
        {
          planets.map((e) => (
            <tr key={ e.name }>
              <td>{e.name}</td>
              <td>{e.rotation_period}</td>
              <td>{e.orbital_period}</td>
              <td>{e.diameter}</td>
              <td>{e.climate}</td>
              <td>{e.gravity}</td>
              <td>{e.terrain}</td>
              <td>{e.surface_water}</td>
              <td>{e.population}</td>
              <td>
                <ul>
                  {e.films.map((film, index) => (
                    <li key={ index }>{film}</li>))}
                </ul>
              </td>
              <td>{e.created}</td>
              <td>{e.edited}</td>
              <td>{e.url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
