import React, { useContext } from 'react';
import { ApiContext } from '../_context/DataApi';

const Filters = () => {
  const { filters, nameFilter } = useContext(ApiContext);

  function handleNameInputs({ target: { value } }) {
    nameFilter(value);
  }

  return (
    <div>
      <label htmlFor="name-filter">
        Filter Name:
        <input
          id="name-filter"
          placeholder="name each"
          name="byName"
          value={ filters.filterName.name }
          onChange={ handleNameInputs }
          data-testid="name-filter"
        />
      </label>
    </div>
  );
};

export default Filters;
