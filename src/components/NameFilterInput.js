import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function NameFilterInput() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { name } = filters.filterByName;

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target }) => setFilters({ ...filters,
          filterByName: { name: target.value } }) }
        placeholder="planet name..."
      />
    </div>
  );
}
