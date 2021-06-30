import React, { useContext } from 'react';
import context from '../context/context';
import TableHeader from '../components/TableHeader';
import TableBody from '../components/TableBody';
import Filter from '../components/Filter';

function Table() {
  const { isLoading } = useContext(context);

  const renderTable = () => (
    <table>
      <TableHeader />
      <TableBody />
    </table>);

  return (
    <div>
      <Filter />
      <br />
      { isLoading ? <h1>Loading...</h1> : renderTable() }
    </div>
  );
}

export default Table;
