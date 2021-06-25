import React, { useContext } from 'react';
import { PlanetsContext } from '../../contexts/PlanetsContext';

function Filter() {
  const { filterByText } = useContext(PlanetsContext);
  return (
    <input
      type="text"
      onChange={ ({ target: { value } }) => filterByText(value) }
      data-testid="name-filter"
    />
  );
}

export default Filter;
