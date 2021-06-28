import React, { useContext } from 'react';
import ContextPlanets from '../store/ContextPlanets';

export default function Table() {
  const { planets } = useContext(ContextPlanets);
  return (
    <>
      <thead>
        <tr key="table_header">
          {planets !== undefined && planets.length && Object.keys(planets[0])
            .map((key) => <th key={ key }>{ key }</th>)}
        </tr>
      </thead>
      <tbody>
        {planets !== undefined && planets.length && planets.map((planet, index) => (
          <tr key={ index }>
            {Object.values(planet).map((value) => <td key={ value }>{ value }</td>)}
          </tr>
        ))}
      </tbody>
    </>
  );
}
