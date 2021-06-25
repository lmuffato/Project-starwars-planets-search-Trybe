import React from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Table(context) {
  const { data } = context;
  return (
    <>
      <label htmlFor="filter">
        <input
          id="filter"
          placeholder="Pesquisar"
          data-testid="name-filter"
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
            <th>{data}</th>
          </tr>
        </thead>
      </table>
      <select name="select" data-testid="column-filter">
        <option value="valor1">Valor 1</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select>
      <select name="select" data-testid="comparison-filter">
        <option value="valor1">Valor 1</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select>
      <label htmlFor="filter">
        <input
          type="number"
          id="filter"
          placeholder="Valor"
          data-testid="value-filter"
        />
      </label>
      <button type="button" data-testid="button-filter">Filtrar</button>
      <button type="button" data-testid="filter">X</button>
    </>

  );
}

Table.contextType = PlanetContext;
