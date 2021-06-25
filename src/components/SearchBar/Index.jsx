import React from 'react';
import TextFilter from './TextFilter';
import NumericFilOptions from './NumericFilOptions';
import NumericFilters from './NumericFilters';

function SearchBar() {
  return (
    <main>
      <TextFilter />
      <NumericFilOptions />
      <NumericFilters />
    </main>
  );
}

export default SearchBar;
