import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function FilterForm() {
  const {
    filters,
    wasFiltered,
    filterByName,
    submitFilters } = useContext(PlanetsContext);
  return (
    <>
      <form
        onSubmit={ (e) => {
          e.preventDefault();
          return submitFilters();
        } }
      >
        <label htmlFor="filterByName">
          Filtrar por nome
          <input
            name="filterByName"
            id="filterByName"
            data-testid="name-filter"
            onChange={ filterByName }
            required
          />
        </label>
      </form>
      <div>
        {wasFiltered ? <p>{ JSON.stringify(filters) }</p> : ''}
      </div>
    </>
  );
}

export default FilterForm;
