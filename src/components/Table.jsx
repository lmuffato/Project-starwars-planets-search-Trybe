import React, { useContext } from 'react';
import PlanetsContext from '../context/ContextPlanets';
import TableHead from './TableHead';

function Table() {
  const { planets } = useContext(PlanetsContext);
  return (
    <table>
      <TableHead />
      <tbody>
        {planets.map((planet) => (
          <tr key={ planet.name }>
            {Object.keys(planet).map((key) => key !== 'residents'
            && <td key={ planet[key] }>{planet[key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
