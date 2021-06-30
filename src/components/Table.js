import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, dataTable } = useContext(PlanetContext);

  const renderObjects = () => (
    <tbody>
      <tr>
        {Object.keys(data[0]).map((item, index) => (<th key={ index }>{item}</th>))}
      </tr>
      {dataTable.map((item, index) => (
        <tr key={ index }>
          { Object.values(item).map((value, j) => (
            <td key={ j }>{value}</td>
          ))}
        </tr>

      ))}
    </tbody>
  );

  return (
    <table>
      {dataTable[0] && renderObjects()}
    </table>
  );
}

export default Table;
