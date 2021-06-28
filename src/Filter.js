import React, { useContext } from 'react';
import context from './context';

function Filter() {
  const { filters, setFilters } = useContext(context);

  return (
    <form>
      <label htmlFor="inputNameFilter">
        Planet Name:
        <input
          type="text"
          name="namePlan"
          id="inputNameFilter"
          data-testid="name-filter"
          onChange={
            ({ target }) => (
              setFilters({
                ...filters, filterByName: { name: target.value },
              }))
          }
        />
      </label>
    </form>
  );
}

export default Filter;
