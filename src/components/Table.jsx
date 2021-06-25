import React from 'react';
import useStarWars from '../hooks/useStarWars';
import TableBody from './TableBody';
import TableHeadings from './TableHeadings';

function Table() {
  const { data, newArrayOfPlanets, isLoading, sortingArray } = useStarWars();

  if (isLoading) {
    return (
      'Loading...'
    );
  }

  if (!isLoading && data) {
    sortingArray(data);
  }

  if (!isLoading && newArrayOfPlanets) {
    sortingArray(newArrayOfPlanets);
  }

  return (
    <div>
      {newArrayOfPlanets.length > 0 ? (
        <table>
          <TableHeadings data={ newArrayOfPlanets } />
          <TableBody data={ newArrayOfPlanets } />
        </table>
      ) : (
        data.length > 0
        && (
          <table>
            <TableHeadings data={ data } />
            <TableBody data={ data } />
          </table>
        )
      )}
    </div>
  );
}

export default Table;
