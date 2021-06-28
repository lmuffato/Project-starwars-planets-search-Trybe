import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumbers from './FilterByNumbers';

export default function Filters() {
  return (
    <div>
      <FilterByName />
      <FilterByNumbers />
    </div>
  );
}
