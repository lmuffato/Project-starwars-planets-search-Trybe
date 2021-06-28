import React from 'react';

export default function ColumnFilter() {
  return (
    <label htmlFor="column-filter">
      <select
        id="column-filter"
        data-testid="column-filter"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
    </label>
  );
}
