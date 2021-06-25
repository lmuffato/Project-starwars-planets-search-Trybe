import React from 'react';
import usePlanet from '../../hooks/usePlanet';

export default function Form() {
  const { filter, setFilter } = usePlanet();

  function handleFilter(event) {
    setFilter({ filters: { filterByName: {
      name: event.target.value } } });
  }

  const { filters: { filterByName: { name } } } = filter;
  return (
    <form>
      <label htmlFor="nameFilter">
        <input
          type="text"
          data-testid="name-filter"
          id="nameFilter"
          onChange={ handleFilter }
          value={ name }
        />
      </label>
    </form>
  );
}
