import React, { useContext } from 'react';
import PlanetsContext from '../utils/PlanetsContext';

function DisplayFilters() {
  const { planetFilter, setPlanetFilter } = useContext(PlanetsContext);
  const { filters: { filterByNumericValues } } = planetFilter;

  const removeFilter = (column) => {
    const updatedFilters = filterByNumericValues.filter((filter) => filter
      .column !== column);

    const filters = {
      ...planetFilter,
      filters: {
        ...planetFilter.filters,
        filterByNumericValues: updatedFilters,
      },
    };

    setPlanetFilter(filters);
  };

  return (
    <div>
      { filterByNumericValues.map(({ column, comparison, value }) => (
        <span key={ column } data-testid="filter">
          { `${column} | ${comparison} | ${value}` }
          <button
            id={ column }
            type="button"
            onClick={ () => removeFilter(column) }
          >
            X
          </button>
        </span>
      )) }
    </div>
  );
}

export default DisplayFilters;
