import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const { filter } = useContext(FilterContext);
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

export default Filter;
