import React, { useState } from 'react';
import usePlanet from '../../hooks/usePlanet';

export default function Form() {
  const { filteredByName, setFilteredByName,
    setFilteredByNumbers, filteredByNumbers } = usePlanet();

  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  function handleOnChangeFilterByNumbers(event) {
    switch (event.target.name) {
    case 'column':
      setColumnFilter(event.target.value);
      break;
    case 'comparison':
      setComparisonFilter(event.target.value);
      break;
    case 'value':
      setValueFilter(event.target.value);
      break;
    default:
      break;
    }
  }

  function handleFilterByName(event) {
    setFilteredByName({ filters: { filterByName: {
      name: event.target.value } } });
  }

  function handleFilterByNumbers(event) {
    event.preventDefault();
    const disabledColumn = document.getElementById(columnFilter).disabled;
    if (disabledColumn === true) {
      return;
    }

    setFilteredByNumbers({
      filterByNumericValues: [
        { column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter },
        ...filteredByNumbers.filterByNumericValues,
      ],
    });
    document.getElementById(columnFilter).disabled = true;
  }

  function handleRemoveFilter(event) {
    const { column } = event.target.dataset;
    const { filterByNumericValues } = filteredByNumbers;
    const newFiltersByNumbers = filterByNumericValues
      .filter((filter) => filter.column !== column);
    setFilteredByNumbers({ filterByNumericValues: newFiltersByNumbers });
    document.getElementById(column).disabled = false;
  }

  const { filters: { filterByName: { name } } } = filteredByName;
  const { filterByNumericValues } = filteredByNumbers;
  return (
    <div>

      <form>
        <label htmlFor="nameFilter">
          <input
            type="text"
            data-testid="name-filter"
            id="nameFilter"
            onChange={ handleFilterByName }
            value={ name }
          />
        </label>
      </form>

      <form onSubmit={ handleFilterByNumbers }>
        <select
          id="ColumnFilter"
          data-testid="column-filter"
          name="column"
          onChange={ handleOnChangeFilterByNumbers }
          value={ columnFilter }
        >
          <option value="population" id="population">
            population
          </option>
          <option value="orbital_period" id="orbital_period">
            orbital_period
          </option>
          <option value="diameter" id="diameter">
            diameter
          </option>
          <option value="rotation_period" id="rotation_period">
            rotation_period
          </option>
          <option value="surface_water" id="surface_water">
            surface_water
          </option>
        </select>

        <select
          data-testid="comparison-filter"
          id="comparisonFilter"
          name="comparison"
          onChange={ handleOnChangeFilterByNumbers }
          value={ comparisonFilter }
        >
          <option value="maior que">
            maior que
          </option>
          <option value="menor que">
            menor que
          </option>
          <option value="igual a">
            igual a
          </option>
        </select>

        <input
          type="number"
          id="valueFilter"
          data-testid="value-filter"
          name="value"
          onChange={ handleOnChangeFilterByNumbers }
          value={ valueFilter }
        />

        <button
          type="submit"
          data-testid="button-filter"
        >
          FilterByNumbers
        </button>
      </form>

      { filterByNumericValues.length > 0 && (
        <div>
          <h2>Filtros Aplicados:</h2>
          {filterByNumericValues && filterByNumericValues
            .map(({ column, comparison, value }, index) => (
              <div key={ index }>
                <span>{`${column} ${comparison} ${value}`}</span>
                <button
                  type="button"
                  data-testid="filter"
                  onClick={ handleRemoveFilter }
                  data-column={ column }
                >
                  x
                </button>
              </div>
            ))}
        </div>
      )}

    </div>
  );
}
