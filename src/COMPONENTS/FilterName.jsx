import React, { useContext } from 'react';
import FilterContext from '../CONTEXT/FilterContext';

function FilterName() {
  const contextFilter = useContext(FilterContext);
  const { setPlanetName, planetName } = contextFilter;

  return (
    <label htmlFor="name-filter">
      Busque pelo nome
      <input
        data-testid="name-filter"
        id="name-filter"
        type="text"
        onChange={ (e) => setPlanetName(e.target.value) }
        value={ planetName }
      />
    </label>
  );
}

export default FilterName;
