import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { data, filters: { filterByName: { name } } } = useContext(Context);
  data.forEach((planet) => delete planet.residents);

  const dataFilter = [...data]
    .filter((planet) => planet.name.toLowerCase().includes(name));
  const columns = dataFilter[0] && Object.keys(dataFilter[0]);

  return (
    <table>
      <thead>
        <tr>
          { dataFilter[0] && columns
            .map((heading) => <th key={ heading }>{ heading }</th>) }
        </tr>
      </thead>

      <tbody>
        {
          dataFilter.map((row, index) => (
            <tr key={ index }>
              { columns.map((column) => <td key={ column }>{ row[column] }</td>) }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

// Resolvendo problema de key: "Warning: Each child in a list should have a unique “key” prop";
// https://pt.stackoverflow.com/questions/389572/react-js-warning-each-child-in-a-list-should-have-a-unique-key-prop

// Referência de como remover uma chave de dentro do objeto: https://stackoverflow.com/questions/25381355/removing-an-object-by-key-inside-another-object

export default Table;
