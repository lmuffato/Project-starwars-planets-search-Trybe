import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function FilterBar() {
  const { setFilters, filters } = useContext(TableContext);

  return (
    <form>
      <label htmlFor="planetName">
        Planet
        <input
          type="text"
          id="planetName"
          name="planetName"
          data-testid="name-filter"
          onChange={
            (e) => (
              setFilters({
                ...filters, filterByName: { name: e.target.value },
              }))
          }
        />
      </label>
    </form>
  );
}

export default FilterBar;
