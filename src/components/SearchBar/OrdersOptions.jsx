import React, { useContext, useState } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';

function OrdersOptions() {
  const { data, isFetching, filters, setOrder } = useContext(StarWarsContext);
  const { order } = filters;
  const [columnSelected, setColumnSelected] = useState(order.column);
  const [sortSelected, setSortSelected] = useState(order.sort);

  function attFilters() {
    if (!isFetching) {
      const columns = Object.keys(data[0]);
      return (
        columns
          .map((headers) => (
            <option key={ headers }>
              { headers }
            </option>
          )));
    }
  }

  function handleChangeRadio(e) {
    const { value } = e.target;
    setSortSelected(value);
  }

  function handleClick() {
    setOrder({ column: columnSelected, sort: sortSelected });
  }

  return (
    <main>
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => setColumnSelected(target.value) }
        value={ columnSelected }
      >
        { attFilters() }
      </select>
      <label htmlFor="asc">
        Ascendente
        <input
          id="desc"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ handleChangeRadio }
          checked={ sortSelected === 'ASC' }
        />
      </label>
      <label htmlFor="desc">
        Descendente
        <input
          id="desc"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ handleChangeRadio }
          checked={ sortSelected === 'DESC' }
        />
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ handleClick }
        >
          Ordenar
        </button>
      </label>
    </main>
  );
}

export default OrdersOptions;
