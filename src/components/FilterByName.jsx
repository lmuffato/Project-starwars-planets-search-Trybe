import React from 'react';
import usePlanets from '../hooks/usePlanets';

function FilterName() {
  // const [text, setText] = useState('');
  const { filters } = usePlanets();

  function filter(text) {
    filters.filterByName.name = text;
    filters.filterByName.filterByName(text);
  }

  return (
    <input
      onChange={ ({ target }) => filter(target.value) }
      type="text"
      data-testid="name-filter"
    />
  );
}

export default FilterName;
