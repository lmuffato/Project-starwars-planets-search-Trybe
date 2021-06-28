import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterComponent() {
  const { filters, setFilterName } = useContext(PlanetsContext);
  return (
    <input
      value={ filters.filterByName.name }
      onChange={ (event) => setFilterName(event.target.value) }
      data-testid="name-filter"
      type="text"
      placeholder="Search by text"
    />
  );
}

export default FilterComponent;
