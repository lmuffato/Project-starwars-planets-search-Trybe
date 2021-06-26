import React, { useContext, useState } from 'react';
import PlanestContext from '../context/PlanetsContext';

function OrderFilter() {
  const context = useContext(PlanestContext);
  const { setOrderSort } = context;
  const [orderBy, setOrderBy] = useState('name');
  const [orderForm, setOrderForm] = useState('ASC');

  const getOrderForm = () => {
    setOrderSort(orderBy, orderForm);
  };

  return (
    <div>
      <span>Order By:</span>
      <select
        onChange={ (e) => setOrderBy(e.target.value) }
        value={ orderBy }
        data-testid="column-sort"
      >
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
      <span>In a way:</span>
      <label htmlFor="asc">
        Ascendant
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          onClick={ (e) => setOrderForm(e.target.value) }
          id="asc"
          defaultChecked
          name="orderBy"
          value="ASC"
        />
      </label>
      <label htmlFor="desc">
        Downward
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          onClick={ (e) => setOrderForm(e.target.value) }
          id="desc"
          name="orderBy"
          value="DESC"
        />
      </label>
      <button
        type="button"
        onClick={ getOrderForm }
        data-testid="column-sort-button"
      >
        Order Columns
      </button>
    </div>
  );
}

export default OrderFilter;
