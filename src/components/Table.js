import React, { useContext, useEffect } from 'react';
import planetContext from '../contexts/planetContext';

function Table() {
  const { planets, getPlanets } = useContext(planetContext);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, index) => (
          <tr key={ index }>
            {Object.values(planet).map((item) => <td key={ item }>{item}</td>)}
          </tr>
        ))}
      </tbody>
    </table>);
}

export default Table;
