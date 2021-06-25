import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function Table() {
  const {
    data: { results },
    filters: { filterByName: { name } },
  } = useContext(MyContext);

  if (!results) return <p>Loading...</p>;
  if (name !== '') {
    const filter = results.filter((planets) => planets.name.toLowerCase().includes(name));
    console.log(filter);
    return (
      <table>
        <tr>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Name</th>
          <th>Orbital Period PopulatioN</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>
        {filter.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.films}</td>
            <td>{planet.gravity}</td>
            <td>{planet.name}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </table>
    );
  }

  return (
    <table>
      <tr>
        <th>Climate</th>
        <th>Created</th>
        <th>Diameter</th>
        <th>Edited</th>
        <th>Films</th>
        <th>Gravity</th>
        <th>Name</th>
        <th>Orbital Period PopulatioN</th>
        <th>Population</th>
        <th>Rotation Period</th>
        <th>Surface Water</th>
        <th>Terrain</th>
        <th>URL</th>
      </tr>
      {results.map((planet) => (
        <tr key={ planet.name }>
          <td>{planet.climate}</td>
          <td>{planet.created}</td>
          <td>{planet.diameter}</td>
          <td>{planet.edited}</td>
          <td>{planet.films}</td>
          <td>{planet.gravity}</td>
          <td>{planet.name}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.population}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.terrain}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
