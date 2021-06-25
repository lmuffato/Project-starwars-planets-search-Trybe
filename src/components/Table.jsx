import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data } = useContext(PlanetContext);
  if (data[0] === 'loading') return <h2>Carregando...</h2>;

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Terrain</th>
          <th>Diameter</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Surface Water</th>
          <th>Gravity</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
          <th>Films</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.population}</td>
            <td>{planet.climate}</td>
            <td>{planet.terrain}</td>
            <td>{planet.diameter}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.gravity}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td><a href={ planet.url }>{planet.url}</a></td>
            <td>
              {planet.films.map((film, idx) => (
                <a key={ idx } href={ film }>{ film }</a>))}
            </td>
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
