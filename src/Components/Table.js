import React, { useContext } from 'react';
import starWarContext from '../context/starWarsContext';

function renderTHead(data) {
  if (data.length === 0) {
    return;
  }
  return (
    <tr>
      {Object.keys(data[0]).map((title, index) => <th key={ index }>{ title }</th>)}
    </tr>
  );
}

function renderTBody(data) {
  if (data.length === 0) return;
  return (
    data.map((planet) => (
      <tr key={ planet }>
        {Object.values(planet).map((name, index) => <td key={ index }>{ name }</td>)}
      </tr>
    ))
  );
}

export default function Table() {
  const { filter: data } = useContext(starWarContext);
  data.forEach((planet) => delete planet.residents);
  return (
    <table>
      <thead>
        { renderTHead(data) }
      </thead>
      <tbody>
        { renderTBody(data) }
      </tbody>
    </table>
  );
}
