import React, { useContext } from 'react';
import { PlanetsContext } from '../../contexts/PlanetsContext';

function Table() {
  const { planets, tableHeads } = useContext(PlanetsContext);
  const tableHeadsWereLoaded = tableHeads.length > 0;

  return (
    <table>
      <thead>
        { tableHeadsWereLoaded && (
          <tr>
            { tableHeads.map((head) => (
              <th key={ head }>{ head }</th>
            )) }
          </tr>
        ) }
      </thead>
      <tbody>
        { planets.map((planet) => {
          const planetData = Object.entries(planet);
          return (
            <tr key={ planet.name }>
              { planetData.map(([key, field]) => (
                <td key={ key }>{ field }</td>
              )) }
            </tr>
          );
        }) }
      </tbody>
    </table>
  );
}

export default Table;
