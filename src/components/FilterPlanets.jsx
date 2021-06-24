import React, { useContext } from 'react';
import planetContext from '../context/planetContext';

function FilterPlanets() {
  const { setFilters, filters } = useContext(planetContext);
  const { filterByValue } = filters;
  const filterChangeHandler = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { name: value },
      ...filterByValue,
    });
  };
  return (
    <input
      type="text"
      placeholder="Procure um planeta"
      data-testid="name-filter"
      onChange={ (event) => filterChangeHandler(event) }
    />
  );
}

export default FilterPlanets;
