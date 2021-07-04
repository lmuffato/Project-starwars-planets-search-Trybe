import React, { useContext } from 'react';
import Context from '../context/Context';

function Input() {
  const { setFilters, filters } = useContext(Context);
  return (
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
  );
}

export default Input;
