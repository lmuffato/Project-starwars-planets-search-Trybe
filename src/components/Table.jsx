import React from 'react';
import useStarWars from '../hooks/useStarWars';
import { dataWithoutResidents } from '../services/starwarsAPI';
import TableBody from './TableBody';
import TableHeadings from './TableHeadings';

function Table() {
  const { data } = useStarWars();
  const dataWithNoResidentes = [...data];
  console.log(data);
  dataWithoutResidents(dataWithNoResidentes);

  return (
    <div>
      {data.length > 0 ? (
        <table>
          <TableHeadings data={ dataWithNoResidentes } />
          <TableBody data={ dataWithNoResidentes } />
        </table>
      ) : (
        'Sorry, planets information unavailable right now' // pode virar um componente no futuro
      )}
    </div>
  );
}

export default Table;
