import React, { useContext } from 'react';
import context from '../context/context';

const FilterSelects = () => {
  const { selects } = useContext(context);
  return (
    <div className="selects-wrapper">
      <label htmlFor="column">
        <select id="column" value={ selects.column } data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="rotation_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          value={ selects.comparison }
          data-testid="comparison-filter"
        >
          <option value="bigger">maior que</option>
          <option value="smaller">menor que</option>
          <option value="equal">igual a</option>
        </select>
      </label>
      <input type="number" data-testid="value-filter" />
      <button type="button" data-testid="button-filter">
        Filtrar
      </button>
    </div>
  );
};

export default FilterSelects;
