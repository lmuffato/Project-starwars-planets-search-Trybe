import React, { useContext } from 'react';
import context from './context';

function Table() {
  const { data, header, filters, keyAPI, keyButton,
    filterByComparison, filterByColumn, filterByValue } = useContext(context);

  // Retorna o valor que for igual ao escrito no estado dentro do componente Filter
  const { filterByName: { name } } = filters;
  let response = data;
  if (data !== undefined && name.length > 0) {
    console.log(name);
    response = data.filter((planet) => (
      planet.name.includes(name)));
  }
  if (keyButton === false && filterByComparison === 'maior que') {
    response = response.filter((planet) => (
      planet[filterByColumn] > Number(filterByValue)));
  }
  if (keyButton === false && filterByComparison === 'menor que') {
    response = response.filter((planet) => (
      planet[filterByColumn] < Number(filterByValue)));
  }
  if (keyButton === false && filterByComparison === 'igual a') {
    response = response.filter((planet) => (
      planet[filterByColumn] === filterByValue));
  }

  // Renderiza uma tabela dinâmica filtrada pelo que foi digitado
  if (keyAPI === false) {
    return (
      <table>
        <tr>
          {header.map((head) => <th key={ head }>{head}</th>)}
        </tr>
        {
          response.map((planet) => (
            <tr key={ planet.name }>
              {
                header.map((i) => (
                  <td key={ planet[i] }>
                    { planet[i] }
                  </td>))
              }
            </tr>))
        }
      </table>
    );
  }

  return (
    <div>LOading</div>
  );
}

export default Table;
