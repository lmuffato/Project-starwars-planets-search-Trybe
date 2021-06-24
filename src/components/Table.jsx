import React from 'react';
import useStarWars from '../hooks/useStarWars';
import TableBody from './TableBody';
import TableHeadings from './TableHeadings';

// Talvez tenha que componentizar as partes da tabela
// Uma opção: componentizar tbody e thead

function Table() {
  const { data } = useStarWars();

  return (
    <table>
      <TableHeadings />
      <TableBody />
    </table>
  );
}

export default Table;
