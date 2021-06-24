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

function filterDataByName(data, name) {
  const newData = [...data].filter((planet) => planet.name.includes(name));
  data.forEach((planet) => delete planet.residents);
  return newData;
}

function filterDataByValues(data, numericValues) {
  if (numericValues.length === 0) { return data; }
  const { comparison, column: keyToCompare, value } = numericValues[0];
  switch (comparison) {
  case 'maior que':
    return [...data].filter((planet) => Number(planet[keyToCompare]) > Number(value));
  case 'menor que':
    return [...data].filter((planet) => Number(planet[keyToCompare]) < Number(value));
  case 'igual a':
    return [...data].filter((planet) => Number(planet[keyToCompare]) === Number(value));
  default:
    return data;
  }
}

function Table() {
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues } } = useContext(Context);
  let newData = filterDataByName(data, name);
  newData = filterDataByValues(newData, filterByNumericValues);
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
