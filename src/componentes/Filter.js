import React, { useContext } from 'react';
import MyTablecontext from '../context/MyTablecontext';

function Filter() {
  const { filters, setFilters } = useContext(MyTablecontext);

  return (
    <form>
      <label htmlFor="inputNameFilter">
        planet name
        <input
          type="text"
          name="namePlan"
          id="inputNameFilter"
          data-testid="name-filter"
          onChange={
            (e) => (
              setFilters({
                ...filters, filterByName: { name: e.target.value },
              }))
          }
        />
      </label>
    </form>
  );
}

export default Filter;
