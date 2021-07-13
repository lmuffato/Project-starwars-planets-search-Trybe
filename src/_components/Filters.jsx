import React, { useContext, useState } from 'react';
import { ApiContext } from '../_context/DataApi';

function Filters() {
  const { filters, nameFilter, numericFilter } = useContext(ApiContext);
  const [numericValuesFilter, setNumericValuesFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  function handleFilterByName({ target: { value } }) {
    nameFilter(value);
  }

  function handleFilterNumericValues({ target: { name, value } }) {
    setNumericValuesFilters({
      ...numericValuesFilter,
      [name]: value,
    });
  }

  function handleAddFilter() {
    numericFilter(numericValuesFilter);
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

  function renderFilterByNumericValues() {
    return (
      <div>
        { renderColumnFilter() }
        { renderComparisonFilter() }
        { renderValueFilter() }
        { renderAddFilter() }
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
