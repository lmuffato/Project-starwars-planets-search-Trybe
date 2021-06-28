import React, { useState, useContext } from 'react';
import PlanetsContext from '../utils/PlanetsContext';

function NumericFilter() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState('');

  const { planetFilter, setPlanetFilter, options } = useContext(PlanetsContext);

  const submit = (event) => {
    event.preventDefault();
    const { filters: { filterByNumericValues } } = planetFilter;

    const newValues = {
      column,
      comparison,
      value: number,
    };

    const updatedValues = [...filterByNumericValues, newValues];

    const filters = {
      ...planetFilter,
      filters: {
        ...planetFilter.filters,
        filterByNumericValues: updatedValues,
      },
    };
    setPlanetFilter(filters);
    setColumn('population');
    setComparison('maior que');
    setNumber('');
  };

  const checkFilter = () => {
    const { filters: { filterByNumericValues } } = planetFilter;

    return options.filter((option) => !filterByNumericValues
      .find((filter) => filter.column === option));
  };

  return (
    <form onSubmit={ submit }>
      <select
        id="column-select"
        value={ column }
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        { checkFilter().map((option) => (
          <option key={ option } value={ option }>{ option }</option>)) }
      </select>
      <select
        id="comparison-select"
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ number }
        onChange={ ({ target: { value } }) => setNumber(value) }
        min="0"
        placeholder="0"
      />
      <button
        type="submit"
        data-testid="button-filter"
        // disabled={ !column || !comparison }
      >
        Filter
      </button>
    </form>
  );
}

export default NumericFilter;
