import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function FilterPlanets() {
  const { name, handleChange } = useContext(MyContext);
  return (
    <form>
      <label htmlFor="name">
        <input
          onChange={ ({ target: { value } }) => handleChange(value) }
          data-testid="name-filter"
          type="text"
          name="name"
          id="name"
          value={ name }
        />
      </label>
    </form>
  );
}

export default FilterPlanets;
