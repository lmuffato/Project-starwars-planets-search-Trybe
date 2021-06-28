import React from 'react';
import FilterByName from './filters/FilterByName';
import FilterByNumericValues from './filters/FilterByNumericValues';

export default function Filters() {
  return (
    <div className="filters-container">
      <FilterByName />
      <FilterByNumericValues />
    </div>
  );
}
