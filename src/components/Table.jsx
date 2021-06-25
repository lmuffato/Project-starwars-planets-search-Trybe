import React, { useContext } from 'react';
import InputsComponents from './InputsComponents';
import SelectsComponents from './SelectsComponents';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import ContextStauo from '../provider/ContextStauo';

function Table() {
  const { data } = useContext(ContextStauo);

  const table = () => (
    <>
      <form action="">
        <InputsComponents />
        <SelectsComponents />
      </form>
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
