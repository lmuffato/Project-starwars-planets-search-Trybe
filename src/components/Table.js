import React, { useContext } from 'react';
import PlanetaContext from '../context/PlanetaContext';

function Table() {
  const { planets, name, column, operator, value,
    filter, header } = useContext(PlanetaContext);

  const filterPlanets = () => {
    const search = name.toLowerCase();
    let filteredPlanets = planets;
    if (name === '' && filter === false) {
      filteredPlanets = planets;
    } else if (search !== '' && filter === false) {
      filteredPlanets = planets.filter((planet) => (
        planet.name.toLowerCase().includes(search)));
    } else if (filter && operator === 'maior que') {
      filteredPlanets = planets.filter((planet) => (
        planet[column] > Number(value)));
    } else if (filter && operator === 'menor que') {
      filteredPlanets = planets.filter((planet) => (
        planet[column] < Number(value)));
    } else if (filter && operator === 'igual a') {
      filteredPlanets = planets.filter((planet) => (
        planet[column] === value));
    }
    return filteredPlanets;
  };

  console.log(header);
  return (
    <>
      <thead>
        <tr>
          {header.map((head, index) => (
            <th key={ index }>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          filterPlanets().map((planet, index) => (
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
          ))
        }
      </tbody>
    </>
  );
}

export default Table;
