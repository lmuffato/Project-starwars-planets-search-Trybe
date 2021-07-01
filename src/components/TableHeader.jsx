import React, { useState, useEffect, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

import './tableHeader.css';

function TableHeader() {
  const { planetsList, setPlanetsList,
    tableColumns, setTableColumns,
  } = useContext(PlanetContext);

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
