import React, { useContext } from 'react';
import Context from '../context/Context';

const Order = () => {
  const { setOrder, setOrderColumn } = useContext(Context);

  return (
    <form>
      <select
        name="column-sort"
        data-testid="column-sort"
        onChange={ (event) => setOrderColumn(event.target.value) }
      >
        <option value="name">name</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <span>
        <label htmlFor="ASC">
          ASC
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            onClick={ (event) => setOrder(event.target.value) }
            id="ASC"
            name="order"
            defaultChecked
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            onClick={ (event) => setOrder(event.target.value) }
            id="DESC"
            value="DESC"
            name="order"
          />
        </label>
      </span>

      <button
        type="button"
        data-testid="column-sort-button"
      >
        Sort
      </button>
    </form>
  );
};

export default Order;
