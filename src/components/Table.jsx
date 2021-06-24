import React, { useContext } from 'react';
import { PlanetsContext } from '../Contexts/PlanetsContextProvider';

function Table() {
  const planetContext = useContext(PlanetsContext);
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
