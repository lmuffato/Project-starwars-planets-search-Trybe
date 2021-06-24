import React, { useContext } from 'react';
import ContextAPI from '../context/ContextAPI';

function InputFilter() {
  const { handleChange } = useContext(ContextAPI);
  return (
    <div>
      <h3>Filter</h3>
      <label htmlFor="filter">
        Filter
        <input
          type="text"
          id="filter"
          data-testid="name-filter"
          onChange={ (e) => handleChange(e) }
        />
      </label>
    </div>
  );
}

export default InputFilter;
