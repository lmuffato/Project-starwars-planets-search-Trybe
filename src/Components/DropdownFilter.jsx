import React, { useContext } from 'react';
import planetsContext from '../contexts/planetsContext';

function DropdownFilter() {
  const { handleSelectChange } = useContext(planetsContext);
  return (
    <div>
      <select
        id="comparison-filter"
        name="comparisonFilter"
        data-testid="column-filter"
        onChange={ handleSelectChange }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
    </div>
  );
}

export default DropdownFilter;
