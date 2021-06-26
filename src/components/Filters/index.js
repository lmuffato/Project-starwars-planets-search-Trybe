import React, { useContext, useState } from 'react';
import AppContext from '../../context/context';

function Filters() {
  const [saveColumn, setSaveColumn] = useState('population');
  const [saveComparison, setSavecomparison] = useState('maior que');
  const [saveValue, setSaveValue] = useState(0);
  const { filters, setFilters } = useContext(AppContext);

  function filterName({ value }) {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  function filterNumber() {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, {
        column: saveColumn,
        comparison: saveComparison,
        value: saveValue,
      }],
    });
  }

  function renderOptions() {
    let op = ['population',
      'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    filters.filterByNumericValues.forEach(({ column }) => {
      op = op.filter((num) => num !== column);
    });
    return op;
  }

  function handleRemoveFilter(column) {
    const newFilteredNumberArray = filters.filterByNumericValues
      .filter((num) => num.column !== column);
    setFilters({
      ...filters, filterByNumericValues: newFilteredNumberArray,
    });
  }

  function renderFilters() {
    return (
      <div>
        <h3>{filters.filterByNumericValues.length ? 'filtros aplicados' : ''}</h3>
        <ul>
          {filters.filterByNumericValues.map(({ column, comparison, value }, index) => (
            <li key={ index } data-testid="filter">
              <span>
                {column}
                {' '}
              </span>
              <span>
                {comparison}
                {' '}
              </span>
              <span>
                {value}
                {' '}
              </span>
              <button
                type="button"
                onClick={ () => handleRemoveFilter(column) }
              >
                X

              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="nome"
        onChange={ ({ target }) => filterName(target) }
      />
      <select
        data-testid="column-filter"
        name="column"
        onChange={ ({ target }) => setSaveColumn(target.value) }
      >
        {renderOptions().map((col) => (
          <option key={ col } value={ col }>{col}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ ({ target }) => setSavecomparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setSaveValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterNumber }
      >
        Filtrar

      </button>
      {renderFilters()}
    </>
  );
}

export default Filters;
