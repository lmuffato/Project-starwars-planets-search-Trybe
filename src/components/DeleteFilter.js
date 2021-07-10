import React, { useContext } from 'react';
import MyContext from '../contexts/MyContext';

export default function DeleteFilter() {
  const {
    filters,
    unavailableFilters,
    setUnavailableFilters,
    setFiltersByNumericValues,
  } = useContext(MyContext);
  const { filterByNumericValues } = filters;

  return (
    <div>
      { filterByNumericValues.map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          <strong>{`${column} ${comparison} ${value}`}</strong>
          <button
            type="button"
            onClick={ () => {
              setFiltersByNumericValues(filterByNumericValues
                .filter((filter) => filter.column !== column));
              setUnavailableFilters(unavailableFilters
                .filter((unavailableFilter) => unavailableFilter !== column));
            } }
          >
            x
          </button>
        </div>
      )) }
    </div>
  );
}
