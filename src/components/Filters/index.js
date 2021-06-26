import React, { useContext, useState } from 'react';
import AppContext from '../../context/context';

function Filters() {
  const [column, setSaveColumn] = useState('population');
  const [comparison, setSavecomparison] = useState('maior que');
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
        column,
        comparison,
        value: saveValue,
      }],
    });
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
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
