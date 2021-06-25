import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';

function Filters() {
  const { numericFilters, setNumericFilters, column, setColumn } = useContext(SWContext);

  function handleClick(clickedFilter) {
    const newFilters = numericFilters.filter((appliedFilter) => (
      appliedFilter !== clickedFilter));
    setNumericFilters(newFilters);
    setColumn([...column, clickedFilter.columnFilter]);
  }

  return (
    <div>
      <form>
        <NameFilter />
        <NumericFilter />
      </form>
      { numericFilters.length > 0 && numericFilters.map((filter, index) => (
        <span key={ index } data-testid="filter">
          {filter.columnFilter}
          <button
            type="button"
            onClick={ () => handleClick(filter) }
          >
            X
          </button>
        </span>
      ))}
    </div>
  );
}

export default Filters;
