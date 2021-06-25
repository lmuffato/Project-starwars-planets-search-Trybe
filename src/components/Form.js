import React from 'react';
import FilterByText from './FilterByText';
import NumericFilters from './NumericFilters';

function Form() {
  return (
    <header>
      <form>
        <FilterByText />
        <NumericFilters />
      </form>
    </header>
  );
}

export default Form;
