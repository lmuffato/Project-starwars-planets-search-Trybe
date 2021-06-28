import React from 'react';
import FilterByName from './FilterFormComponents/FilterByName';
import ColumnFilter from './FilterFormComponents/ColumnFilter';
import ComparisonFilter from './FilterFormComponents/ComparisonFilter';
import ValueFilter from './FilterFormComponents/ValueFilter';
import Button from './FilterFormComponents/Button';

export default function FilterForm() {
  return (
    <form>
      <FilterByName />
      <ColumnFilter />
      <ComparisonFilter />
      <ValueFilter />
      <Button />
    </form>
  );
}
