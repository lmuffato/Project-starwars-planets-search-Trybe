import React, { useContext, useState } from 'react';
import PlanestContext from '../context/PlanetsContext';

function OrderFilter() {
  const context = useContext(PlanestContext);
  const { setOrderColumn,
    setData, setOrderSort, data } = context;
  const [orderBy, setOrderBy] = useState('name');
  // const [orderForm, setOrderForm] = useState('ASC');

  // consultado método sort em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  function compare(a, b) {
    const POSITIONARRAY = -1;
    if (a < b) return POSITIONARRAY;
    if (a > b) return 1;
    return 0;
  }

  const orderArrByPopulation = () => {
    const orderArr = data.population.sort(compare);
    setData(orderArr);
  };

  const getOrderBy = (event) => {
    const { value } = event.target;
    setOrderBy(value.toLowerCase());
    setOrderColumn(value);
    orderArrByPopulation();
  };

  const getOrderForm = (event) => {
    const { value } = event.target;
    setOrderForm(value);
    setOrderSort(value);
  };

  return (
    <div>
      <span>Order By:</span>
      <select onChange={ getOrderBy } value={ orderBy } data-testid="column-sort">
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
      <span>In a way:</span>
      <label htmlFor="asc">
        Ascendant
        <input
          type="radio"
          onChange={ getOrderForm }
          id="asc"
          name="orderBy"
          value="ASC"
        />
      </label>
      <label htmlFor="desc">
        Downward
        <input
          type="radio"
          onChange={ getOrderForm }
          id="desc"
          name="orderBy"
          value="DESC"
        />
      </label>
    </div>
  );
}

export default OrderFilter;
