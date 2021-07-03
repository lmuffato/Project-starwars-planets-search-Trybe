import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const { filterNames, setFilterNames } = useContext(FilterContext);
  return (
    <form>
      <label htmlFor="filter">
        Nome:
        <input
          value={ filterNames }
          data-testid="name-filter"
          type="text"
          onChange={ (event) => setFilterNames(event.target.value) }
        />
      </label>
    </form>
  );
}

export default Filter;
