import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function TableHeader() {
  const { tableColumns } = useContext(PlanetContext);

  const tableHeaderColumns = () => {
    const selectedColluns = tableColumns.filter((column) => column !== 'edited');
    return (
      <tr>
        {selectedColluns.map((column) => <th key={ column }>{ column }</th>)}
      </tr>
    );
  };

  return (
    <thead>
      { tableHeaderColumns() }
    </thead>
  );
}

export default TableHeader;
