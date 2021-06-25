import React from 'react';
import useStarWars from '../hooks/useStarWars';
import { dataWithoutResidents } from '../services/starwarsAPI';
import TableBody from './TableBody';
import TableHeadings from './TableHeadings';

function Table() {
  const { data } = useStarWars();
  const newData = [...data];
  dataWithoutResidents(newData);
  // const filter = filteredPlanets(newData);

  return (
    <div>
      {data.length > 0 ? (
        <table>
          <TableHeadings data={ newData } />
          <TableBody data={ newData } />
        </table>
      ) : (
        'Carregando...' // pode virar um componente no futuro
      )}
    </div>
  );
}

export default Table;
