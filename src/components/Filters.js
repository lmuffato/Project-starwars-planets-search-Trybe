import React from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';

function Filters() {
  return (
    <form>
      <NameFilter />
      <NumericFilter />
    </form>
  );
}

export default Filters;
