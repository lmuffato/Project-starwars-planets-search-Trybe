import React, { useContext, useRef, useState } from 'react';
import ContextPlanets from '../store/ContextPlanets';
import { column, range } from '../store/options';

export default function FilterByName() {
  const { filters, setFilters } = useContext(ContextPlanets);
  const [columnFilter, setColumnFilter] = useState('population');
  const [rangeFilter, setRangeFilter] = useState('maior que');
  const inputRef = useRef();

  const handleClick = () => {
    const filterColumn = { column: columnFilter,
      comparison: rangeFilter,
      value: inputRef.current.value,
    };
    const filterByNumericValues = 'filterByNumericValues';
    setFilters({
      ...filters,
      filterByNumericValues: [...filters[filterByNumericValues].concat(filterColumn)],
    });
  };

  return (
    <section>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        {column.map((option) => <option key={ option }>{ option }</option>)}
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
    </section>
  );
}
