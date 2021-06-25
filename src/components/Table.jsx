import React from 'react';
import usePlanets from '../hooks/usePlanets';

function Table() {
  const { data: { planetsList } } = usePlanets();
  if (planetsList.length === 0) return 'carregando...';
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(planetsList[0]).map((key) => <th key={ key }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {planetsList.map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((value) => <td key={ value }>{value}</td>)}
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
