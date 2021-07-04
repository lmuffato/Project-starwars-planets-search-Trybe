import React, { useContext } from 'react';
import Context from '../context/Context';
import FilterSelect from './FilterSelect';

function Input() {
  const { setFilters, filters } = useContext(Context);
  return (
    <div>
      <label htmlFor="name-filter">
        <input
          name="name-filter"
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ ({ target }) => setFilters({ ...filters,
            filterByName: { name: target.value } }) }
        />
      </label>
      <FilterSelect />
    </div>
  );
}

export default Input;
