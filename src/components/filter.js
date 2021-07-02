import React, { useContext } from 'react';
import ContextFilter from '../context/contextFilter';

function FilterText() {
  const { filter } = useContext(ContextFilter);
  return (
    <form>
      <label htmlFor="filter">
        Nome:
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          onChange={ filter }
        />
      </label>
    </form>
  );
}

export default FilterText;
