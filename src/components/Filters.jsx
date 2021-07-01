import React, { useState, useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetsContext';
import { columnFilterOption, comparisonFilterOption } from '../utils/selectFieldsData';

function Filters() {
  const numericFilterInitialState = {
    column: '',
    comparison: '',
    value: '',
  };

  const { filters, setFilters } = useContext(PlanetContext);
  const [nameFilter, setNameFilter] = useState('');
  const [numericFilter, setNumericFilter] = useState(numericFilterInitialState);
  const [columnOptions, setColumnOptions] = useState(columnFilterOption);

  useEffect(() => {
    setFilters({
      ...filters,
      filterByName: {
        name: nameFilter,
      },
    });
  }, [nameFilter]);

  function updateNumericFilter(filter, value) {
    setNumericFilter({
      ...numericFilter,
      [filter]: value,
    });
  }

  function applyNewNumericFilter() {
    setFilters({
      ...filters,
      filterByNumericValue: [
        ...filters.filterByNumericValue,
        numericFilter,
      ],
    });
  }

  function handleExcludeFilter({ column }) {
    const serializedFilters = filters.filterByNumericValue
      .filter((filter) => filter.column !== column);
    console.log(serializedFilters, column);
    setFilters({
      ...filters,
      filterByNumericValue: serializedFilters,
    });
  }

  function filterColumnSelectOptions() {
    const filteredOption = columnOptions
      .filter(({ name }) => !numericFilter.column.includes(name));
    setColumnOptions(filteredOption);
  }

  useEffect(() => {
    filterColumnSelectOptions();
  }, [filters.filterByNumericValue]);

  return (
    <>
      <section className="filters-input">
        <input
          type="text"
          value={ nameFilter }
          onChange={ ({ target }) => setNameFilter(target.value) }
          data-testid="name-filter"
        />
        <select
          data-testid="column-filter"
          value={ numericFilter.column }
          onChange={
            ({ target }) => updateNumericFilter('column', target.value)
          }
        >
          {columnOptions.map((opt) => (
            <option key={ opt.name } value={ opt.name }>
              {opt.name}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ numericFilter.comparison }
          onChange={
            ({ target }) => updateNumericFilter('comparison', target.value)
          }
        >
          {comparisonFilterOption.map((opt) => (
            <option key={ opt.comparison } value={ opt.comparison }>
              {opt.comparison}
            </option>
          ))}
        </select>
        <input
          data-testid="value-filter"
          value={ numericFilter.value }
          onChange={
            ({ target }) => updateNumericFilter('value', target.value)
          }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ applyNewNumericFilter }
        >
          Aplicar filtro
        </button>
      </section>
      <section>
        { filters.filterByNumericValue && filters.filterByNumericValue.map((filter) => (
          <div key={ filter.column } data-testid="filter">
            <h3>{ filter.column }</h3>
            <p>{ filter.comparison }</p>
            <p>{ filter.value }</p>
            <button
              type="button"
              onClick={ () => handleExcludeFilter(filter) }
            >
              X
            </button>
          </div>
        )) }
        {filters.filterByNumericValue && <div data-testid="filter" />}
      </section>
    </>
  );
}

export default Filters;
