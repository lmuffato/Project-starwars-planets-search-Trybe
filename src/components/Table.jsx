import React from 'react';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import ServiceApi from './services/ServiceApi';
import InputTextFilter from './input/InputTextFilter';
import '../style/tableHeader.css';

function Table() {
  return (
    <div>
      <InputTextFilter />
      <table>
        <ServiceApi />
        <TableHeader />
        <TableRows />
      </table>
    </div>
  );
}

export default Table;
