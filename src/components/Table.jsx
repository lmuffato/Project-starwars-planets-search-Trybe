import React, { useContext } from 'react';
import InputsComponents from './InputsComponents';
import SelectsComponents from './SelectsComponents';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import FiltersItens from './FiltersItens';
import CheckBoxInput from './CheckBoxInput';
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
          <CheckBoxInput />
        </form>
        <FiltersItens />
      </div>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );

  if (!data.length) {
    return (
      <img
        className="loading"
        alt="git-loading"
        src="https://i.pinimg.com/originals/09/18/ed/0918eda1f57759878bb0a1391bc0ec74.gif"
      />
    );
  }

  return !data ? 'Loading...' : table();
}

export default Table;
