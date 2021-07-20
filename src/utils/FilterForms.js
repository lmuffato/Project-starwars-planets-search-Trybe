import React, { useState, useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterForms() {
  const INITIAL_NEW_FILTERS = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const { filter, setFilter } = useContext(StarWarsContext);
  const { filters: { filterByName } } = filter;
  const { filters: { filterByNumericValues } } = filter;
  const { filters: { order: { column, sort } } } = filter;

  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [inputNumberFilter, setInputNumberFilter] = useState('');
  const [sortOrder, setSortOrder] = useState(column);
  const [typeSort, setTypeSort] = useState(sort);

  function newOptions() {
    const mapColumns = filterByNumericValues.map((newColumn) => newColumn.column);
    return INITIAL_NEW_FILTERS.filter((item) => !mapColumns.includes(item));
  }

  function handleClick() {
    setFilter(
      { filters: {
        filterByName,
        filterByNumericValues:
      [...filterByNumericValues,
        {
          column: columnFilter,
          comparison: comparisonFilter,
          value: inputNumberFilter,
        }],
        order: { column: sortOrder, sort: typeSort } } },
    );
  }

  function orderClick() {
    setFilter({
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
        order: { column: sortOrder, sort: typeSort },
      },
    });
    setFilter({
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
        order: { column: sortOrder, sort: typeSort },
      },
    });
  }

  function resetFilter() {
    setFilter({
      filters: {
        filterByName: { name: '' },
        filterByNumericValues: [],
        order: { column: 'Name', sort: 'ASC' } },
    });
  }

  useEffect(() => {
    setColumnFilter(newOptions()[0]);
  }, [filter]);

  return (
    <form>
      <label htmlFor="columns">
        Select a column:
        {filterByNumericValues.length === 0 ? (
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
        ) : (
          <select
            name="columns"
            id="columns"
            data-testid="column-filter"
            value={ columnFilter }
            onChange={ ({ target }) => setColumnFilter(target.value) }
          >
            {newOptions().map((option, index) => (
              <option
                value={ option }
                key={ index }
              >
                {option}
              </option>
            ))}
          </select>
        ) }
      </label>
      <div data-testid="filter">
        <button
          type="button"
          onClick={ () => resetFilter() }
        >
          X
        </button>
      </div>
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
      <div data-testid="filter">
        <button
          type="button"
          onClick={ () => resetFilter() }
        >
          X
        </button>
      </div>
      <input
        type="text"
        data-testid="value-filter"
        value={ inputNumberFilter }
        onChange={ ({ target }) => setInputNumberFilter(target.value) }
      />
      <div data-testid="filter">
        <button
          type="button"
          onClick={ () => resetFilter() }
        >
          X
        </button>
      </div>
      <label htmlFor="sortOrder">
        Select the order column:
        <select
          name="sortOrder"
          id="sortOrder"
          data-testid="column-sort"
          value={ sortOrder }
          onChange={ ({ target }) => setSortOrder(target.value) }
        >
          <option value="name">name</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        ASC
        <input
          type="radio"
          value="ASC"
          name="sort"
          data-testid="column-sort-input-asc"
          onChange={ ({ target }) => setTypeSort(target.value) }
        />
        DESC
        <input
          type="radio"
          value="DESC"
          name="sort"
          data-testid="column-sort-input-desc"
          onChange={ ({ target }) => setTypeSort(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => orderClick() }
      >
        Order!
      </button>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Submit!
      </button>
      <br />
    </form>
  );
}

export default FilterForms;
