import React, { useContext, useState } from 'react';
import { ApiContext } from '../_context/DataApi';

function Filters() {
  const { data,
    filters,
    nameFilter,
    numericFilter,
    removeFilter,
    orderBy,
  } = useContext(ApiContext);

  const [numericValuesFilter, setNumericValuesFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [activeFilters, setActiveFilters] = useState([]);
  const [orderByFilters, setOrderByFilters] = useState({
    column: 'name',
    sort: 'ASC',
  });

  function handleFilterByName({ target: { value } }) {
    nameFilter(value);
  }

  function handleSortFilters({ target: { name, value } }) {
    setOrderByFilters({ ...orderByFilters, [name]: value });
  }

  function handleSortButton() {
    orderBy(orderByFilters);
  }

  function handleFilterNumericValues({ target: { name, value } }) {
    setNumericValuesFilters({
      ...numericValuesFilter,
      [name]: value,
    });
  }

  function handleAddFilter() {
    numericFilter(numericValuesFilter);
    setActiveFilters([...activeFilters, numericValuesFilter.column]);
  }

  function handleRemoveFilter({ target: { name } }) {
    removeFilter(name);
    setActiveFilters([...activeFilters.filter((filter) => filter !== name)]);
  }

  function renderFilterByName() {
    return (
      <label htmlFor="filter-by-name">
        Filter by Name:
        <input
          id="filter-by-name"
          name="filterName"
          value={ filters.filterName.name }
          onChange={ handleFilterByName }
          data-testid="name-filter"
        />
      </label>
    );
  }

  function getColumnTitles() {
    return Object.keys(data[0]);
  }

  function renderColumnSort() {
    const columnTitles = getColumnTitles();
    return (
      <label htmlFor="column-sort">
        Sort by:
        <select
          data-testid="column-sort"
          id="column-sort"
          name="column"
          onChange={ handleSortFilters }
        >
          { columnTitles.map(
            (title) => <option key={ `column-${title}` }>{title}</option>,
          )}
        </select>
      </label>
    );
  }

  function renderRadiosSort() {
    return (
      <div>
        <label htmlFor="column-sort-input-asc">
          Asc:
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            id="column-sort-input-asc"
            name="sort"
            value="ASC"
            onClick={ handleSortFilters }
          />
        </label>
        <label htmlFor="column-sort-input-desc">
          Desc:
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            id="column-sort-input-desc"
            name="sort"
            value="DESC"
            onClick={ handleSortFilters }
          />
        </label>
      </div>
    );
  }

  function renderSortButton() {
    return (
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSortButton }
      >
        Sort
      </button>
    );
  }

  function renderColumnFilter() {
    const columnFilterList = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    return (
      <label htmlFor="column-filter">
        Select a column:
        <select
          data-testid="column-filter"
          id="column-filter"
          name="column"
          onChange={ handleFilterNumericValues }
        >
          { columnFilterList.map(
            (column) => <option key={ `${column}-filter` }>{column}</option>,
          )}
        </select>
      </label>
    );
  }

  function renderComparisonFilter() {
    const comparisonFilterList = ['maior que', 'menor que', 'igual a'];
    return (
      <label htmlFor="comparison-filter">
        Select a comparison:
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparison"
          onChange={ handleFilterNumericValues }
        >
          { comparisonFilterList.map(
            (comparison) => <option key={ `${comparison}-filter` }>{comparison}</option>,
          )}
        </select>
      </label>
    );
  }

  function renderValueFilter() {
    return (
      <label htmlFor="value-filter">
        Input a value:
        <input
          type="number"
          id="value-filter"
          data-testid="value-filter"
          name="value"
          value={ numericValuesFilter.value }
          onChange={ handleFilterNumericValues }
        />
      </label>
    );
  }

  function renderAddFilter() {
    return (
      <button type="button" data-testid="button-filter" onClick={ handleAddFilter }>
        Adicionar Filtro
      </button>
    );
  }

  function renderActiveFilters() {
    return (
      <div>
        { activeFilters.map((filter) => (
          <div data-testid="filter" key={ `${filter}-filter-button` }>
            { filter }
            <button type="button" onClick={ handleRemoveFilter } name={ filter }>
              X
            </button>
          </div>
        ))}
      </div>
    );
  }

  function renderFilterByNumericValues() {
    return (
      <div>
        { renderColumnFilter() }
        { renderComparisonFilter() }
        { renderValueFilter() }
        { renderAddFilter() }
        { renderColumnSort() }
        { renderRadiosSort() }
        { renderSortButton() }
        { renderActiveFilters() }
      </div>
    );
  }

  return (
    <div>
      { renderFilterByName() }
      { renderFilterByNumericValues() }
    </div>
  );
}

export default Filters;
