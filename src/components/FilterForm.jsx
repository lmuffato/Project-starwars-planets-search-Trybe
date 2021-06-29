import React, { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import CollunsDropdown from './CollunsDropdown';
import PlanetsContext from '../context/PlanetsContext';

function FilterForm() {
  const {
    filters,
    wasFiltered,
    filterByName,
    clearFilters,
    submitFilters } = useContext(PlanetsContext);
  const showFilters = () => (
    <div>
      <p>
        { JSON.stringify(filters) }
        <AiFillCloseCircle onClick={ clearFilters } />
      </p>
    </div>);
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
      <CollunsDropdown />
      <div>
        { wasFiltered && showFilters() }
      </div>
    </>
  );
}

export default FilterForm;
