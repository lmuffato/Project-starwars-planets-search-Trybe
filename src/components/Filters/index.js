import React, { useContext, useState } from 'react';
import AppContext from '../../context/context';

function Filters() {
  const [saveColumn, setSaveColumn] = useState('population');
  const [comparison, setSavecomparison] = useState('maior que');
  const [saveValue, setSaveValue] = useState(0);
  const [columnOptions, setColumnOptions] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
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
        comparison,
        value: saveValue,
      }],
    });
    columnOptions.splice(columnOptions.indexOf(saveColumn), 1);
    setColumnOptions(columnOptions);
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
        {columnOptions.map((col) => (
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
    </>
  );
}

export default Filters;
