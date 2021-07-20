import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SearchBar() {
  const { filter, setFilter } = useContext(StarWarsContext);
  const { filters: { filterByName: { name } } } = filter;
  const { filters: { filterByNumericValues } } = filter;
  const { filters: { order } } = filter;

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ name }
      onChange={ ({ target }) => setFilter(
        { filters: { filterByName:
          { name: target.value },
        filterByNumericValues,
        order } },
      ) }
    />
  );
}

export default SearchBar;
