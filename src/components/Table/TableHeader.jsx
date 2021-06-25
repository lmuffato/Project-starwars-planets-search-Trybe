import React from 'react';
import usePlanets from '../../hooks/usePlanets';

export default function TableHeader() {
  const { results: planets } = usePlanets();
  const tableHeaders = Object.keys(planets[0]).filter((key) => key !== 'residents');

  return (
    <thead>
      <tr>
        {tableHeaders.map((col) => <th key={ col }>{col}</th>)}
      </tr>
    </thead>
  );
}
