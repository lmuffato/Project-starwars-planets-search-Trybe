import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Inputs() {
  const {
    handleFilterChange,
    handleSelectChange,
    handleSelectClick,
  } = useContext(Context);

  return (
    <form>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          id="name-filter"
          type="text"
          placeholder="Nome do Planeta"
          name="nameFilter"
          onChange={ handleFilterChange }
        />
        <select
          data-testid="column-filter"
          id="column-filter"
          name="columnFilter"
          onChange={ handleSelectChange }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparisonFilter"
          onChange={ handleSelectChange }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          id="value-filter"
          type="number"
          name="valueFilter"
          onChange={ handleSelectChange }
        />
        <button
          data-testid="button-filter"
          id="button-filter"
          type="button"
          onClick={ handleSelectClick }
        >
          Buscar
        </button>
      </label>
    </form>
  );
}
