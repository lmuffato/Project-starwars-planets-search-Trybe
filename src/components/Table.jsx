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

function filterDataName(data, name) {
  const newData = [...data].filter((planet) => planet.name.includes(name));
  data.forEach((planet) => delete planet.residents);
  return newData;
}

function filterDataNumber(data, numeralValue) {
  if (numeralValue.length === 0) { return data; }
  const { comparison, column: compare, value } = numeralValue[0];
  switch (comparison) {
  case 'maior que':
    return [...data].filter((planet) => Number(planet[compare]) > Number(value));
  case 'menor que':
    return [...data].filter((planet) => Number(planet[compare]) < Number(value));
  case 'igual a':
    return [...data].filter((planet) => Number(planet[compare]) === Number(value));
  default:
    return data;
  }
}

function Table() {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    } } = useContext(Context);
  let newData = filterDataName(data, name);
  newData = filterDataNumber(newData, filterByNumericValues);
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
