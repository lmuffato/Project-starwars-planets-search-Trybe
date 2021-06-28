import React, { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../../contexts/PlanetsContext';

import FilterApplied from '../FilterApplied';

function Filter() {
  const {
    filterByText,
    filterByComparisons,
    columnsToSelect,
    filters,
  } = useContext(PlanetsContext);

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const [valueForComparison, setValueForComparison] = useState('');

  useEffect(() => {
    setColumn(columnsToSelect[0]);
  }, [columnsToSelect]);

  return (
    <>
      <input
        type="text"
        onChange={ ({ target: { value } }) => filterByText(value) }
        data-testid="name-filter"
      />
      { filters.filterByNumericValues.map((filter) => (
        <FilterApplied
          key={ filter.column }
          column={ filter.column }
          comparison={ filter.comparison }
          value={ filter.value }
        />
      )) }
      <form
        onSubmit={ (event) => filterByComparisons(event, {
          column, comparison, value: valueForComparison,
        }) }
      >
        <select
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          { columnsToSelect.length > 0 && columnsToSelect.map((head) => (
            <option value={ head } key={ head }>{head}</option>
          )) }
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setComparison(value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setValueForComparison(value) }
        />
        <button type="submit" data-testid="button-filter">Filtrar</button>
      </form>
    </>
  );
}

export default Filter;