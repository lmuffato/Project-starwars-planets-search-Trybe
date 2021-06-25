import React from 'react';
import useFilters from '../../hooks/useFilters';

export default function NameFilter() {
  const { filters, setFilters } = useFilters();

  return (
    <div>
      <label htmlFor="name-filter">
        Name Filter:
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (event) => setFilters({
            ...filters,
            filterByName: { name: event.target.value },
          }) }
        />
      </label>
    </div>
  );
}
