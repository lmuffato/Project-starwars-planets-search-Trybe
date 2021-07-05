import React, { useContext } from 'react';
import { PlanetsContext } from '../context';

function Table() {
  const { filteredValues } = useContext(PlanetsContext);

  console.log(filteredValues);
  const tableHeader = Object.keys(filteredValues[0] || []);
  tableHeader.splice(tableHeader.indexOf('residents'), 1);

  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((elementHeader) => (
            <th key={ elementHeader }>
              {elementHeader}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredValues.map((planet) => {
          delete planet.residents;
          return (
            <tr key={ planet.name }>
              {Object.values(planet).map((elementBody) => (
                <td key={ `${planet.name}${elementBody}` }>{elementBody}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
