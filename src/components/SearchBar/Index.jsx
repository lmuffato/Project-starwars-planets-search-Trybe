import React from 'react';
import TextFilter from './TextFilter';
import NumericFilOptions from './NumericFilOptions';
import NumericFilters from './NumericFilters';
import OrdersOptions from './OrdersOptions';

function SearchBar() {
  return (
    <main>
      <TextFilter />
      <NumericFilOptions />
      <NumericFilters />
      <OrdersOptions />
    </main>
  );
}

export default SearchBar;
