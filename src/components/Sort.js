import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function Sort() {
  const [columnSort, setColumnSort] = useState('name');
  const [order, setOrder] = useState('ASC');
  const { keys, setSort, handleSort } = useContext(SWContext);

  function handleColumn(event) {
    setColumnSort(event.target.value);
  }

  function handleOrder(event) {
    setOrder(event.target.value);
  }

  function handleClick() {
    setSort({ columnSort, order });
    handleSort({ columnSort, order });
  }

  return (
    keys !== undefined && (
      <div>
        <label htmlFor="property">
          Ordenar por colunas:
          <select
            id="property"
            name="property"
            data-testid="column-sort"
            value={ columnSort }
            onChange={ handleColumn }
            className="sort-filter"
          >
            {keys.map((string, index) => (
              <option key={ index } value={ string }>{string}</option>))}
          </select>
          <label htmlFor="ASC" name="sort">
            <input
              name="sort"
              type="radio"
              value="ASC"
              id="ASC"
              data-testid="column-sort-input-asc"
              onChange={ handleOrder }
              className="sort-filter"
            />
            Ordenar Ascendente
          </label>
          <label htmlFor="DESC" name="sort">
            <input
              name="sort"
              type="radio"
              value="DESC"
              id="DESC"
              data-testid="column-sort-input-desc"
              onChange={ handleOrder }
              className="sort-filter"
            />
            Ordenar Descendente
          </label>
          <button
            type="button"
            onClick={ handleClick }
            data-testid="column-sort-button"
            className="sort-filter"
          >
            Ordenar
          </button>
        </label>
      </div>
    )
  );
}

export default Sort;
