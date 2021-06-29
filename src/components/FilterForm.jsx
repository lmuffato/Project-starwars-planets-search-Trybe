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
  const filtersUI = Object.values(filters.filterByNumericValues);
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
        { wasFiltered && filtersUI.map((filter, index) => (
          <div data-testid="filter" key={ index }>
            <p>
              { JSON.stringify(filter) }
              <button type="button" onClick={ () => clearFilters(filter.column) }>
                <AiFillCloseCircle />
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FilterForm;
