/* Requisito realizado com auxílio de Guilherme Dornelles e Pollyana da tribo 10-A */

import React, { useContext } from 'react';
import planetsContext from '../contexts/planetsContext';

function Filters() {
  const {
    handleSelectChange,
    handlePlanetFiltered,
    handleSubmitFilter,
  } = useContext(planetsContext);

  return (
    <form>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          id="name-filter"
          type="text"
          placeholder="Planet Name"
          name="nameFilter"
          onChange={ handlePlanetFiltered }
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
          onClick={ handleSubmitFilter }
        >
          Buscar
        </button>
      </label>
    </form>
  );
}

export default Filters;
