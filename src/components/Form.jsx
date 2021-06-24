import React, { useContext } from 'react';
import CountriesContext from '../context/CountriesContext';

function Form() {
  const { handleChange } = useContext(CountriesContext);
  return (
    <form>
      <label htmlFor="name-filter">
        <input
          type="text"
          data-testid="name-filter"
          id="name-filter"
          onChange={ handleChange }
        />
      </label>
    </form>
  );
}

export default Form;
