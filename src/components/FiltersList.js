import React, { useContext } from 'react';

import planetContext from '../contexts/planetContext';

import Filter from './Filter';

function FiltersList() {
  const { filters } = useContext(planetContext);

  return (
    <div>
      {filters.filterByNumericValues.length > 1
      && filters.filterByNumericValues.map((filter, index) => (<Filter
        key={ index }
        column={ filter.column }
        comparison={ filter.comparison }
        value={ filter.value }
      />))}
    </div>
  );
}

export default FiltersList;
