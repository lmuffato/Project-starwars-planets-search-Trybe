import React from 'react';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import ServiceApi from './ServiceApi';
import './tableHeader.css';

function Table() {
  return (
    <table>
      <ServiceApi />
      <TableHeader />
      <TableRows />
    </table>
  );
}

export default Table;
