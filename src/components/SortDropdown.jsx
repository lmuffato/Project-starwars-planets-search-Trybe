import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function SortDropdown() {
  const { getOrderData } = useContext(PlanetsContext);
  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        getOrderData({
          column: e.target.elements.column.value,
          sort: e.target.elements.sort.value,
        });
      } }
    >
      <label htmlFor="column">
        Ordernar coluna
        <select name="column" id="column" data-testid="column-sort">
          <option>name</option>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="sort">
        <label htmlFor="ASC">
          DESC
          <input
            type="radio"
            name="sort"
            id="ASC"
            data-testid="column-sort-input-desc"
            value="DESC"
          />
        </label>
        <label htmlFor="DESC">
          ASC
          <input
            type="radio"
            name="sort"
            id="DESC"
            data-testid="column-sort-input-asc"
            value="ASC"
          />
        </label>
      </label>
      <button type="submit" data-testid="column-sort-button"> Ordenar </button>
    </form>
  );
}

export default SortDropdown;
