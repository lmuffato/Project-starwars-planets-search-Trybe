import React from 'react';
// import planetsContext from '../contexts/planetsContext';

function DropdownFilter() {
  return (
    <div>
      <select name="dropdown" data-testid="column-filter">
        <option value="">population</option>
        <option value="">orbital_period</option>
        <option value="">diameter</option>
        <option value="">rotation_period</option>
        <option value="">surface_water</option>
      </select>
    </div>
  );
}

export default DropdownFilter;
