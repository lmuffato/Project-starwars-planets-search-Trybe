import React, { useContext } from 'react';
import Context from '../context/Context';

function nameFilter(data, name) {
  data.forEach((planet) => delete planet.residents);
  const dataFilter = [...data]
    .filter((planet) => planet.name.toLowerCase().includes(name));

  return dataFilter;
}

function valuesFilter(data, numericValues) {
  if (numericValues.length === 0) { return data; }
  const { comparison, column, value } = numericValues[0];

  switch (comparison) {
  case 'maior que':
    return data.filter((planet) => planet[column] > Number(value));
  case 'menor que':
    return data.filter((planet) => planet[column] < Number(value));
  case 'igual a':
    return data.filter((planet) => Number(planet[column]) === Number(value));
  default:
    return data;
  }
}

function Table() {
  const {
    data,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
  } = useContext(Context);

  let dataFilter = nameFilter(data, name);
  dataFilter = valuesFilter(dataFilter, filterByNumericValues);
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
