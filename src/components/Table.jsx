import React, { useContext } from 'react';
import { PlanetsContext } from '../context';

function Table() {
  const { filteredValues } = useContext(PlanetsContext);

  // console.log(filteredValues);
  const tableHeader = () => {
    const headerValues = Object.keys(filteredValues[0] || []);
    const residentsIndex = headerValues.indexOf('residents');
    if (residentsIndex >= 0) {
      headerValues.splice(residentsIndex, 1);
      return headerValues;
    }
    return headerValues;
  };

  return (
    <table>
      <thead>
        <tr>
          {tableHeader().map((elementHeader) => (
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
