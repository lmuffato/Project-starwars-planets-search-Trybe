import React, { useContext } from 'react';
import ContextPlanets from '../store/ContextPlanets';

export default function FilterByName() {
  const { filters, setFilters } = useContext(ContextPlanets);

  const handleChange = ({ target: { value } }) => {
    const filterByName = { name: value };
    setFilters({ ...filters, filterByName });
  };
  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filters.filterByName.name }
      onChange={ handleChange }
      placeholder="Planet Name Search"
    />
  );
}
