import React, { useState, useContext } from 'react';
import PlanetsContext from '../utils/PlanetsContext';

function NumericFilter() {
  const [column, setColumn] = useState('orbital_period');
  const [comparison, setComparison] = useState('higher');
  const [number, setNumber] = useState(0);

  const { planetFilter, setPlanetFilter } = useContext(PlanetsContext);

  const submit = (event) => {
    event.preventDefault();
    const { filters: { filterByNumericValues } } = planetFilter;

    const newValues = {
      column,
      comparison,
      value: number,
    };

    const checkFilters = filterByNumericValues
      .filter((filter) => filter.column !== column);

    const updatedValues = [...checkFilters, newValues];

    const filters = {
      ...planetFilter,
      filters: {
        ...planetFilter.filters,
        filterByNumericValues: updatedValues,
      },
    };
    setPlanetFilter(filters);
    setColumn('orbital_period');
    setComparison('higher');
    setNumber(0);
  };

  return (
    <form onSubmit={ submit }>
      <select
        id="column-select"
        value={ column }
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        id="comparison-select"
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option value="higher">maior que</option>
        <option value="lesser">menor que</option>
        <option value="equal">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ number }
        onChange={ ({ target: { value } }) => setNumber(value) }
        min="0"
      />
      <button
        type="submit"
        data-testid="button-filter"
      >
        Filter
      </button>
    </form>
  );
}

export default NumericFilter;
