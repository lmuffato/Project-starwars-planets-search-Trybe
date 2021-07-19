import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterForms() {
  const { filter, setFilter } = useContext(StarWarsContext);
  const { filters: { filterByName } } = filter;

  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [inputNumberFilter, setInputNumberFilter] = useState('');

  return (
    <form>
      <label htmlFor="columns">
        Select a column:
        <select
          name="columns"
          id="columns"
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ ({ target }) => setColumnFilter(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparision">
        Select a comparision:
        <select
          name="comparision"
          id="comparision"
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ ({ target }) => setComparisonFilter(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        type="text"
        data-testid="value-filter"
        value={ inputNumberFilter }
        onChange={ ({ target }) => setInputNumberFilter(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilter(
          { filters: {
            filterByName,
            filterByNumericValues:
          [{
            column: columnFilter,
            comparison: comparisonFilter,
            value: inputNumberFilter,
          }] } },
        ) }
      >
        Submit!
      </button>
      <br />
    </form>
  );
}

export default FilterForms;
