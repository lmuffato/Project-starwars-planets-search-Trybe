import React from 'react';

// Talvez tenha que componentizar as partes da tabela
// Uma opção: componentizar tbody e thead

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Teste
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Teste
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
