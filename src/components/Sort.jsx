import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function Sort({ tableHeaders }) {
  const { setOrder } = useContext(Context);

  const [stateColumn, setColumn] = useState(null);
  const [sort, setSort] = useState(null);

  return (
    <section>
      <select
        data-testid="column-sort"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {!tableHeaders ? false : tableHeaders.map((h, index) => (
          <option value={ h } key={ index }>{h}</option>
        ))}
      </select>
      <label htmlFor="ASC">
        ASC
        <input
          name="order"
          id="ASC"
          value="ASC"
          data-testid="column-sort-input-asc"
          type="radio"
          onChange={ ({ target: { value } }) => setSort(value) }
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          name="order"
          id="DESC"
          value="DESC"
          data-testid="column-sort-input-desc"
          type="radio"
          onChange={ ({ target: { value } }) => setSort(value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => { setOrder({ column: stateColumn, sort }); } }
      >
        Sort
      </button>
    </section>
  );
}

Sort.propTypes = {
  tableHeaders: PropTypes.array,
}.isRequired;

export default Sort;
