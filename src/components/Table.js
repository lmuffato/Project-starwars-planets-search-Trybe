import React, { useContext } from 'react';
import Context from '../context/Context';

function renderTableColumns(data) {
  if (data.length === 0) {
    return;
  }
  return (
    <tr>
      { Object.keys(data[0]).map((title) => <th key={ title }>{ title }</th>) }
    </tr>
  );
}

function renderTableRows(data) {
  if (data.length === 0) {
    return;
  }
  return (
    data.map((planet) => (
      <tr key={ planet }>
        { Object.values(planet).map((value) => <td key={ value }>{ value }</td>)}
      </tr>
    ))
  );
}

function Table() {
  const { data, filters: { filterByName: { name } } } = useContext(Context);
  const newData = [...data].filter((planet) => planet.name.includes(name));
  data.forEach((planet) => delete planet.residents);
  return (
    <table>
      <thead>
        { renderTableColumns(newData) }
      </thead>
      <tbody>
        { renderTableRows(newData) }
      </tbody>
    </table>
  );
}

export default Table;
