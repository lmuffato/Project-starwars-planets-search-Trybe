import React, { useContext } from 'react';
import Context from '../context/Context';
import './Table.css';

function Table() {
  const { data, name, setName, header } = useContext(Context);

  const nameFilter = () => {
    const search = name.toLowerCase();
    let filteredPlanets = data;
    if (search !== '') {
      filteredPlanets = data.filter((planet) => (
        planet.name.toLowerCase().includes(search)));
    }
    return filteredPlanets;
  };

  return (
    <>
      <input
        type="text"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
        className="filter-input"
      />
      <table className="table">
        <thead>
          <tr>
            {header.map((head, index) => (
              <th key={ index }>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {nameFilter().map((planet, index) => (
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
    </>
  );
}

export default Table;
