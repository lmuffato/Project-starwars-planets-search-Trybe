import React, { useContext } from 'react';
import Context from '../context/Context';

function renderTableHead(data) {
  if (data.length === 0) return;
  return (
    <tr>
      { Object.keys(data[0]).map((title) => <th key={ title }>{ title }</th>) }
    </tr>
  );
}

function renderTableBody(data) {
  if (data.length === 0) return;
  return (
    data.map((planet) => (
      <tr key={ planet }>
        { Object.values(planet).map((value, index) => <td key={ index }>{ value }</td>) }
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
        { renderTableHead(newData) }
      </thead>
      <tbody>
        { renderTableBody(newData) }
      </tbody>
    </table>
  );
}

export default Table;
