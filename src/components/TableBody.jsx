import React, { useContext } from 'react';
import '../pages/Table.css';
import context from '../context/context';

function TableBody() {
  const { data } = useContext(context);

  const renderTableBody = () => {
    const planetValues = data.map((planet) => Object.values(planet));
    return (
      planetValues.map((values, index) => {
        values.pop();
        return (
          <tr key={ values[index][0] }>
            { values.map((value) => (
              <td key={ value } className="tableData">
                { value }
              </td>)) }
          </tr>
        );
      }));
  };

  return (
    <tbody>
      { renderTableBody() }
    </tbody>
  );
}

export default TableBody;
