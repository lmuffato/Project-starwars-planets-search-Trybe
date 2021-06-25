import React, { useContext } from 'react';
import ContextPlanets from '../store/ContextPlanets';

export default function Filters() {
  const { filters, setFilters } = useContext(ContextPlanets);

  const handleChange = ({ target: { value } }) => {
    const filter = {
      filterByName: {
        name: value,
      } };
    setFilters(filter);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.filterByName.name }
        onChange={ handleChange }
      />
    </div>
  );
}
