import React, { useContext } from 'react';
import InputsComponents from './InputsComponents';
import SelectsComponents from './SelectsComponents';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import FiltersItens from './FiltersItens';
import ContextStauo from '../provider/ContextStauo';
import '../styles/home.css';

function Table() {
  const { data } = useContext(ContextStauo);

  const table = () => (
    <div className="main">
      <div className="form-filters">
        <form action="">
          <InputsComponents />
          <SelectsComponents />
        </form>
        <FiltersItens />
      </div>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );

  if (!data.length) return <h1>Loading...</h1>;

  return !data ? 'Loading...' : table();
}

export default Table;
