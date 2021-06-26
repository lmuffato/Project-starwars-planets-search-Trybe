import React from 'react';
import titlesTB from '../services/dataTitles';

function TableHeader() {
  const header = () => (
    <thead className="thead">
      <tr>
        {titlesTB.map((titulo, index) => <th key={ index }>{titulo}</th>)}
      </tr>
    </thead>
  );

  return (
    header()
  );
}

export default TableHeader;
