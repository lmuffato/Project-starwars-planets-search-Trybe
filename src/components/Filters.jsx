import React from 'react';

import NameFilter from './Filters/NameFilter';
import NumericFilter from './Filters/NumericFilter';
import AppliedNumericFilter from './Filters/AppliedNumericFilter';
import SortFilter from './Filters/SortFilter';

import useFilters from '../hooks/useFilters';

export default function Filters() {
  const { filters } = useFilters();
  const appliedFilters = filters.filterByNumericValues;
  const appliedFiltersCategories = appliedFilters.map((filter) => filter.column);

  const numericFilterCategories = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const availableNumericFilterCategories = numericFilterCategories.filter(
    (filterCat) => !appliedFiltersCategories.includes(filterCat),
  );

  return (
    <div>
      <NameFilter />
      {appliedFilters.map((filter) => (
        <AppliedNumericFilter appliedNumFilter={ filter } key={ filter.column } />
      ))}
      <NumericFilter available={ availableNumericFilterCategories } />
      <SortFilter />
    </div>
  );
}
