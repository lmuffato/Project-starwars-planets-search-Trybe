import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data, keys } = useContext(Context);

  const headerTable = keys.filter((key) => key !== 'residents');
  // console.log(keys);
  // console.log(data);
  if (!keys.length && !data.length) return <div>...Loading</div>;

  return (
    <main>
      <table>
        <thead>
          <tr>
            { headerTable.map((key, index) => <th key={ index }>{key}</th>) }
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
    </main>
  );
}

export default Table;
