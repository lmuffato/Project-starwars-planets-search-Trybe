import React, { useContext } from 'react';
import InputsComponents from './InputsComponents';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ContextStauo from '../provider/ContextStauo';

function Table() {
  const { data } = useContext(ContextStauo);

  const table = () => (
    <>
      <InputsComponents />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </>
  );

  if (!data.length) return <h1>Loading...</h1>;

  return !data ? 'Loading...' : table();
}

export default Table;
