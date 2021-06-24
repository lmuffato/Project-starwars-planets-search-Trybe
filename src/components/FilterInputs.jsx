import React, { useContext } from 'react';
import planetContext from '../context/planetContext';

function FilterInputs() {
  const {
    setFilters, filters, handleFilterInput, filterPlanetsBtn,
  } = useContext(planetContext);
  const { filterByValue } = filters;
  const { column, comparison, value } = filters.filterByValue[0];
  const handleFilterOption = (col, val) => {
    setFilters({
      ...filters,
      filterByValue: [
        {
          ...filterByValue[0],
          [col]: val,
        },
      ],
    });
  };
  return (
    <div>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => handleFilterOption('column', target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => handleFilterOption('comparison', target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>

      <input
        data-testid="value-filter"
        value={ value }
        onChange={ handleFilterInput }
      />
      <button
        type="button"
        onClick={ filterPlanetsBtn }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterInputs;
