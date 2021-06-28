import React, { useEffect } from 'react';
import useStarWars from '../../hooks/useStarWars';
import TableBody from './TableBody';
import TableHeadings from './TableHeadings';

function Table() {
  const {
    isLoading,
    data,
    soughtPlanets,
    getFilteredPlanets,
    filterByNumericValues,
  } = useStarWars();

  useEffect(() => {
    getFilteredPlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className="content">
      {soughtPlanets.length > 0 ? (
        <table>
          <TableHeadings data={ soughtPlanets } />
          <TableBody data={ soughtPlanets } />
        </table>
      ) : (
        data.length > 0 && (
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
