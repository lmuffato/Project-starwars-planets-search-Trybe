import React from 'react';
import useStarWars from '../hooks/useStarWars';

function TableHeadings() {
  const { data } = useStarWars();

  return (
    <thead>
      <tr>
        {data.length > 0
          ? Object.keys(data[0]).map((heading) => (
            <th key={ heading }>{heading}</th>
          ))
          : ''}
      </tr>
    </thead>
  );
}

export default TableHeadings;
