import React, { useContext } from 'react';
import ContextPlanets from '../context/Context';

function Filters() {
  const { setName,
    filters,
    setColumn,
    setValue,
    setComparison,
    filterNumber } = useContext(ContextPlanets);

  return (
    <div>
      <label htmlFor="inputName">
        nome
        <input
          data-testid="name-filter"
          value={ filters.filterByName.name }
          id="inputName"
          onChange={ (event) => setName(event.target.value) }
        />
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option>maior que</option>
          <option>igual a</option>
          <option>menor que</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          onChange={ (e) => setValue(e.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterNumber }
        >
          Adicionar filtro
        </button>
      </label>
    </div>
  );
}

export default Filters;
