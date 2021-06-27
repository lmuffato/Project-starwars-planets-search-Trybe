import React, { useContext, useState } from 'react';
import PlanestContext from '../context/PlanetsContext';
import { compareNameAsc, compareNameDesc,
  comparePopulationAsc, comparePopulationDesc } from '../services/orderPlanets';

function OrderFilter() {
  const context = useContext(PlanestContext);
  const { filters: { order: { column, sort } }, setOrderSort, data, setData } = context;
  const [orderBy, setOrderBy] = useState('name');
  const [orderForm, setOrderForm] = useState('ASC');

  const orderPlanets = (type, form) => {
    if (type === 'name') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(compareNameAsc));
      case 'DESC':
        return setData(data.sort(compareNameDesc));
      default:
        break;
      }
    }
    if (type === 'population') {
      switch (form) {
      case 'ASC':
        return setData(data.sort(comparePopulationAsc));
      case 'DESC':
        return setData(data.sort(comparePopulationDesc));
      default:
        break;
      }
    }
  };

  // useEffect(() => {
  //   orderPlanets(column, sort);
  // }, [data, column, sort]);

  const getOrderForm = () => {
    orderPlanets(column, sort);
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
