import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { input, setInput } = useContext(StarWarsContext);

  console.log(input);

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ input }
      onChange={ ({ target }) => setInput(target.value) }
    />
  );
}

export default SearchBar;
