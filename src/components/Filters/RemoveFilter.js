import React, { useContext } from 'react';
import { PlanetsContext } from '../../context/PlanetsContext';
import useFilter from '../../hooks/useFilter';

const RemoveFilter = () => {
  const { filters } = useContext(PlanetsContext);
  const { removeFilter } = useFilter();
  const numericFilters = filters.filterByNumericValues;

  return (
    <div>
      {numericFilters.length > 0
        && numericFilters.map((filter) => (
          <span key={ filter.column }>
            <p>{filter.column}</p>
            <p>{filter.comparison}</p>
            <p>{filter.value}</p>
            <button
              type="button"
              onClick={ () => removeFilter(filter.column) }
            >
              Excluir
            </button>
          </span>
        ))}
    </div>
  );
};

export default RemoveFilter;
