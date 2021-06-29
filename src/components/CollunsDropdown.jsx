import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function CollunsDropdown() {
  const { filterByValue } = useContext(PlanetsContext);
  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        filterByValue({
          column: e.target.elements.column.value,
          comparison: e.target.elements.comparison.value,
          value: e.target.elements.valueFilter.value,
        });
      } }
    >
      <label htmlFor="column">
        Filtrar por Coluna
        <select name="column" id="column" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select name="comparison" id="comparison" data-testid="comparison-filter">
          <option value=">">maior que</option>
          <option value="<">menor que</option>
          <option value="===">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          name="valueFilter"
          id="valueFilter"
        />
      </label>
      <button type="submit" data-testid="button-filter"> Filtrar </button>
    </form>
  );
}

export default CollunsDropdown;
