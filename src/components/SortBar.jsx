import React, { useContext, useState } from 'react';
import TableContext from '../context/TableContext';

function SortBar() {
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState('ASC');
  const { filters, setFilters, headers } = useContext(TableContext);

  function handleClick() {
    setFilters({
      ...filters,
      order: { column: sortColumn, sort: sortDirection },
    });
  }

  return (
    <form>
      <select
        data-testid="column-sort"
        value={ sortColumn }
        onChange={ (e) => setSortColumn(e.target.value) }
      >
        { headers.map((head) => (
          <option
            name={ head }
            value={ head }
            key={ head }
          >
            { head }
          </option>))}
      </select>
      <div onChange={ (e) => setSortDirection(e.target.value) }>
        <label htmlFor="ASC">
          ASC
          <input
            id="ASC"
            value="ASC"
            type="radio"
            name="sort-direction"
            data-testid="column-sort-input-asc"
            defaultChecked
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            id="DESC"
            value="DESC"
            type="radio"
            name="sort-direction"
            data-testid="column-sort-input-desc"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={ handleClick }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </form>
  );
}

export default SortBar;
