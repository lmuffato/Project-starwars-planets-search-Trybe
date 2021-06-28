import React, { useContext, useState } from 'react';
import PlanetsContext from '../utils/PlanetsContext';

function DisplayOrder() {
  const { planets, setPlanetFilter, planetFilter } = useContext(PlanetsContext);
  const planetTags = planets.length ? Object.keys(planets[0]) : [];

  const [sortOrder, setSortOrder] = useState('ASC');
  const [orderByColumn, setOrderByColumn] = useState('name');

  const setOrder = () => {
    const filters = {
      ...planetFilter,
      filters: {
        ...planetFilter.filters,
        order: {
          column: orderByColumn,
          sort: sortOrder,
        },
      },
    };

    setPlanetFilter(filters);
  };

  return (
    <div>
      <select
        id="column-sort"
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setOrderByColumn(value) }
      >
        { planetTags.map((option) => (
          <option key={ option } value={ option }>{ option }</option>)) }
      </select>
      <label htmlFor="column-sort-input-asc">
        ASC
        <input
          type="radio"
          id="column-sort-input-asc"
          name="order"
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={ ({ target: { value } }) => setSortOrder(value) }
          defaultChecked
        />
      </label>
      <label htmlFor="column-sort-input-desc">
        DESC
        <input
          type="radio"
          id="column-sort-input-desc"
          name="order"
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ ({ target: { value } }) => setSortOrder(value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ setOrder }
      >
        Ordenar
      </button>
    </div>
  );
}

export default DisplayOrder;
