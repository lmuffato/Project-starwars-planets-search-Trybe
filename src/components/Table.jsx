import React from 'react';
import usePlanets from '../hooks/usePlanets';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';

export default function Table() {
  const { results: planets } = usePlanets();

  return (
    <div>
      {!planets ? 'loading...' : (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )}
    </div>
  );
}
