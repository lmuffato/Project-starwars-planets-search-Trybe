import React, { useContext } from 'react';
import ContextAPI from '../context/ContextAPI';

function Table() {
  const { resultsApi, filter } = useContext(ContextAPI);

  const filterPlanets = resultsApi
    .filter(({ name }) => name
      .includes(filter.filters.filterByName.name));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Name</th>
            <th>Orbital_period</th>
            <th>Population</th>
            <th>Rotation_period</th>
            <th>Surface_water</th>
            <th>Terrain</th>
            <th>Url</th>
          </tr>
          {filterPlanets.map((result, index) => (
            <tr key={ index }>
              <td>{result.climate}</td>
              <td>{result.created}</td>
              <td>{result.diameter}</td>
              <td>{result.edited}</td>
              <td>{result.films}</td>
              <td>{result.gravity}</td>
              <td>{result.name}</td>
              <td>{result.orbital_period}</td>
              <td>{result.population}</td>
              <td>{result.rotation_period}</td>
              <td>{result.surface_water}</td>
              <td>{result.terrain}</td>
              <td>{result.url}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default Table;
