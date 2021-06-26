import React from 'react';
import PropTypes from 'prop-types';
import useFilters from '../../hooks/useFilters';

export default function AppliedNumericFilter({ appliedNumFilter }) {
  const { filters, setFilters } = useFilters();

  function handleDeleteFilter() {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.filter(
        (numFilter) => numFilter.column !== appliedNumFilter.column,
      ),
    });
  }

  return (
    <div data-testid="filter">
      <span>{appliedNumFilter.column}</span>
      <span>{appliedNumFilter.comparison}</span>
      <span>{appliedNumFilter.value}</span>
      <button
        type="button"
        onClick={ handleDeleteFilter }
      >
        X
      </button>
    </div>
  );
}

AppliedNumericFilter.propTypes = {
  appliedNumFilter: PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.value,
  }),
}.isRequired;
