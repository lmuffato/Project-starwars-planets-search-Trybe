import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/myContext';
import { compareNameAsc, compareNameDesc,
  compareOrbitalAsc,
  compareOrbitalDesc,
  comparePopulationAsc, comparePopulationDesc } from '../services/OrderPlanets';

function OrderFilter() {
  const context = useContext(myContext);
  const { setOrderSort, data, changeData } = context;
  const [orderBy, setOrderBy] = useState('name');
  const [orderForm, setOrderForm] = useState('ASC');

  const orderPlanets = (type, form) => {
    if (type === 'name') {
      switch (form) {
      case 'ASC':
        return changeData(data.sort(compareNameAsc));
      case 'DESC':
        return changeData(data.sort(compareNameDesc));
      default:
        break;
      }
    }
    if (type === 'population') {
      switch (form) {
      case 'ASC':
        return changeData(data.sort(comparePopulationAsc));
      case 'DESC':
        return changeData(data.sort(comparePopulationDesc));
      default:
        break;
      }
    }
    if (type === 'orbital_period') {
      switch (form) {
      case 'ASC':
        return changeData(data.sort(compareOrbitalAsc));
      case 'DESC':
        return changeData(data.sort(compareOrbitalDesc));
      default:
        break;
      }
    }
  };

  const getOrderForm = () => {
    orderPlanets(orderBy, orderForm);
  };

  useEffect(() => {
    setOrderSort(orderBy, orderForm);
    getOrderForm();
  }, [data, orderBy, orderForm]);

  return (
    <div className="App">
      <h1>STAR WARS PLANET SEARCH</h1>
      <span>Order By:</span>
      <select
        onChange={ (e) => setOrderBy(e.target.value) }
        data-testid="column-sort"
      >
        <option value="name">Name</option>
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
      </select>
      <span>In a way:</span>
      <label htmlFor="asc">
        Ascendant
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          onChange={ (e) => setOrderForm(e.target.value) }
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
          onChange={ (e) => setOrderForm(e.target.value) }
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
