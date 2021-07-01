import React, { useContext } from 'react';
import FilterContext from '../CONTEXT/FilterContext';

function AppliedFilters() {
  const contextFilter = useContext(FilterContext);
  const { filter } = contextFilter;
  const { filterByNumericValues } = filter.filters;
  console.log(filterByNumericValues);
  // if (filterByNumericValues > 0) {
  return (
    <p>paciencia</p>
    /* { filterByNumericValues.map(appliedFilter => {
      <div key={ index } data-testid="filter">
        <p>{`column: ${appliedFilter.column}, comparison: ${appliedFilter.comparison}, value: ${appliedFilter.value}`}</p>
      </div>
    }) } */
  );
} // return null;

export default AppliedFilters;
