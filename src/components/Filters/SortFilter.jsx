import React, { useState } from 'react';

import useFilters from '../../hooks/useFilters';

import numericFilterCategories from '../../helpers/numericFilterCategories';

export default function SortFilter() {
  const { filters, setFilters } = useFilters();
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');

  function handleAddFilter() {
    setFilters({
      ...filters,
      order: { column, sort },
    });
  }

  return (
    <form>
      <select
        data-testid="column-sort"
        onChange={ (event) => setColumn(event.target.value) }
      >
        {numericFilterCategories.map((filter) => (
          <option key={ filter } value={ filter }>{filter}</option>
        ))}
      </select>
      <label htmlFor="sort" onChange={ (event) => setSort(event.target.value) }>
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="sort"
          value="ASC"
        />
        Ascendent
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="sort"
          value="DESC"
        />
        Descendent
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleAddFilter }
      >
        sort
      </button>
    </form>
  );
}
