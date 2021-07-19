import React, { useEffect, useState } from 'react';
import planetAPI from '../services/planetAPI';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    planetAPI().then(({ results }) => setData(results));
  }, []);
  console.log('data', data);

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
      {data.map((planets) => (
        <tr key={ planets.name }>
          <td>{planets.climate}</td>
          <td>{planets.created}</td>
          <td>{planets.diameter}</td>
          <td>{planets.edited}</td>
          <td>{planets.films}</td>
          <td>{planets.gravity}</td>
          <td>{planets.name}</td>
          <td>{planets.orbital_period}</td>
          <td>{planets.population}</td>
          <td>{planets.rotation_period}</td>
          <td>{planets.surface_water}</td>
          <td>{planets.terrain}</td>
          <td>{planets.url}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
