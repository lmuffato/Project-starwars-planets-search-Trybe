import React from 'react';
// import context from '../context/context';

const FilterSelects = () => (
  <div className="selects-wrapper">
    <label htmlFor="column-filter">
      <select data-testid="column-filter">
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="rotation_water">Surface Water</option>
      </select>
    </label>
    <label htmlFor="comparison-filter">
      <select data-testid="comparison-filter">
        <option value="bigger">Maior que</option>
        <option value="smaller">Menor que</option>
        <option value="equal">Igual a</option>
      </select>
    </label>
    <input type="number" data-testid="value-filter" />
    <button type="button" data-testid="button-filter">
      Filtrar
    </button>
  </div>
);

export default FilterSelects;
