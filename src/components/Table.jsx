import React from 'react';
import useStarWars from '../hooks/useStarWars';
import { dataWithoutResidents } from '../services/starwarsAPI';
import TableBody from './TableBody';
import TableHeadings from './TableHeadings';

// Talvez tenha que componentizar as partes da tabela
// Uma opção: componentizar tbody e thead

function Table() {
  const { data } = useStarWars();
  const dataWithNoResidentes = [...data];
  dataWithoutResidents(dataWithNoResidentes);

  return (
    <div>
      {data.length > 0 ? (
        <table>
          <TableHeadings data={ dataWithNoResidentes } />
          <TableBody data={ dataWithNoResidentes } />
        </table>

      ) : (
        'Sorry, planet information unavailable right now'
      ) }
    </div>
  );
}

export default Table;
