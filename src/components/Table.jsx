import React from 'react';
import usePlanets from '../hooks/usePlanets';

function Table() {
  const planetContext = usePlanets();
  if (planetContext.data.length === 0) return 'carregando...';
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planetContext.data[0]).map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {planetContext.data.map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((value) => <td key={ value }>{value}</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
