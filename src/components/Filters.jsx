import React from 'react';

import NameFilter from './Filters/NameFilter';
import NumericFilter from './Filters/NumericFilter';

export default function Filters() {
  return (
    <div>
      <NameFilter />
      <NumericFilter />
    </div>
  );
}
