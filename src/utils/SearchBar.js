import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { filter, setFilter } = useContext(StarWarsContext);
  const { filters: { filterByName: { name } } } = filter;
  const { filters: { filterByNumericValues } } = filter;

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ name }
      onChange={ ({ target }) => setFilter(
        { filters: { filterByNumericValues, filterByName: { name: target.value } } },
      ) }
    />
  );
}

export default SearchBar;
