import React, { useContext } from 'react';
import context from '../context/context';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';

function Table() {
  const { isLoading } = useContext(context);

  const renderTable = () => (
    <table>
      <TableHeader />
      <TableBody />
    </table>);

  return (
    <div>
      { isLoading ? <h1>Loading...</h1> : renderTable() }
    </div>
  );
}

export default Table;
