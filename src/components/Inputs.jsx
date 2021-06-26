import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Inputs() {
  const { handleFilterChange } = useContext(Context);
  return (
    <form>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          id="name-filter"
          type="text"
          placeholder="Nome do Planeta"
          onChange={ handleFilterChange }
        />
        <select data-testid="column-filter" id="column-filter">
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select data-testid="comparison-filter" id="comparison-filter">
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          id="value-filter"
          type="number"
        />
        <button
          data-testid="button-filter"
          id="button-filter"
          type="button"
        >
          Buscar
        </button>
      </label>
    </form>
  );
}
