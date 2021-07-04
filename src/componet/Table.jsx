import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { header, searchPlanet, filters } = useContext(Context);
  const { filterByNumericValues } = filters;
  const { column, comparison, value } = filterByNumericValues[0];
  const listaPlanets = [...searchPlanet];
  let filteredList = [...listaPlanets];

  filteredList = listaPlanets.filter((planet) => {
    if (comparison === 'maior que') {
      return parseFloat(planet[column]) > parseFloat(value);
    }
    if (comparison === 'menor que') {
      return parseFloat(planet[column]) < parseFloat(value);
    }
    return planet[column] === value;
  });

  return (
    <table>
      <thead>
        <tr>
          {header.map((headerName) => (
            <th
              key={ headerName }
            >
              {headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredList.map((planet) => (
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
  );
}

export default Table;
