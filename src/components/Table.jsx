import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data, keys, filters } = useContext(Context);
  const headerTable = keys.filter((key) => key !== 'residents');

  if (!keys.length && !data.length) return <div>...Loading</div>;

  const dataFilters = () => {
    const {
      filterByName: { name },
    } = filters;

    if (name) {
      return data.filter((planet) => planet.name.includes(name));
    }

    return data;
  };

  const planets = dataFilters();

  return (
    <main>
      <table>
        <thead>
          <tr>
            { headerTable.map((key, index) => <th key={ index }>{key}</th>) }
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => (
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
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
