import React, { useContext, useEffect, useRef, useState } from 'react';
import ContextPlanets from '../store/ContextPlanets';
import { column, range } from '../store/options';

export default function FilterByName() {
  const { filters, setFilters } = useContext(ContextPlanets);
  const [rangeFilter, setRangeFilter] = useState('maior que');
  const [columns, setColumns] = useState(column);
  const [columnFilter, setColumnFilter] = useState(columns[0]);
  const inputRef = useRef();

  const handleClick = () => {
    const filterColumn = { column: columnFilter,
      comparison: rangeFilter,
      value: inputRef.current.value,
    };
    const filterByNumericValues = 'filterByNumericValues';
    if (columnFilter && rangeFilter && inputRef.current.value) {
      setFilters({
        ...filters,
        filterByNumericValues: [...filters[filterByNumericValues].concat(filterColumn)],
      });
    }
    console.log(filters);
  };

  const deleteFilter = (e) => {
    const actualFilters = filters.filterByNumericValues;
    const newFilters = actualFilters
      .filter((actualFilter) => actualFilter.column !== e.target.id);
    console.log(newFilters);
    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
  };

  useEffect(() => {
    setColumns(column);
    const columnsFilters = filters.filterByNumericValues.map((filter) => filter.column);
    const filtrado = columns.filter((option) => !columnsFilters.includes(option));
    setColumns(filtrado);
    setColumnFilter(filtrado[0]);
  }, [filters]);

  return (
    <section>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        {columns.map((option) => <option key={ option }>{ option }</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        value={ rangeFilter }
        onChange={ (e) => setRangeFilter(e.target.value) }
      >
        {range.map((option) => <option key={ option }>{ option }</option>)}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        ref={ inputRef }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      {filters.filterByNumericValues.length
      && filters.filterByNumericValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <p>{filter.column}</p>
          <p>{filter.comparison}</p>
          <p>{filter.value}</p>
          <button type="button" onClick={ deleteFilter } id={ filter.column }>x</button>
        </div>
      ))}
    </section>
  );
}
