import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data } = useContext(Context);
  data.forEach((planet) => delete planet.residents);

  const columns = data[0] && Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          { data[0] && columns.map((heading) => <th key={ heading }>{ heading }</th>) }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, index) => (
            <tr key={ index }>
              { columns.map((column) => <td key={ column }>{ row[column] }</td>) }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

// Resolvendo problema de key: "Warning: Each child in a list should have a unique “key” prop"
// https://pt.stackoverflow.com/questions/389572/react-js-warning-each-child-in-a-list-should-have-a-unique-key-prop

export default Table;
