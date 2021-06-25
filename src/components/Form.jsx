import React, { useContext } from 'react';
import CountriesContext from '../context/CountriesContext';

function Form() {
  const { setFilters } = useContext(CountriesContext);

  const handleChange = ({ target }) => setFilters({ filterByName: {
    name: target.value,
  },
  });

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
