import React from 'react';
import titlesTB from '../services/dataTitles';

function TableHeader() {
  return (
    <thead className="thead">
      <tr>
        {titlesTB().map((titulo, index) => <th key={ index }>{titulo}</th>)}
      </tr>
    </thead>
  );
}

export default TableHeader;
