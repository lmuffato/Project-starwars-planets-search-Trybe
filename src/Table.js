import React, { useContext } from 'react';
import context from './context';

function Table() {
  const { data, header, filters } = useContext(context);

  // Texto de carregamento enquanto recebe a API
  if (!header.length) return <h1>Loading...</h1>;

  // Retorna o valor que for igual ao escrito no estado dentro do componente Filter
  function filter() {
    const { filterByName: { name } } = filters;
    return data.results.filter((planet) => (
      planet.name.includes(name)
    ));
  }

  // Renderiza uma tabela dinâmica filtrada pelo que foi digitado
  return (
    <table>
      <tr>
        {header.map((head) => <th key={ head }>{head}</th>)}
      </tr>
      {
        filter()
          .map((planet) => (
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

export default Table;
