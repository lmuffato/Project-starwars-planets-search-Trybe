import React, { useContext, useState } from 'react';
import planetContext from '../contexts/planetContext';

// import { Container } from './styles';

function NumericFilters() {
  const { setFilters, filters, handleNumericFilters } = useContext(planetContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  function handleAddFilter() {
    const newFilter = { column, comparison, value };
    const oldFilters = filters.filterByNumericValues || [];

    setFilters({
      filterByNumericValues: [...oldFilters, newFilter],
    });

    handleNumericFilters();
  }

  return (
    <fieldset>

      <select
        name="numeric-filters"
        id="numeric-filters"
        value={ column }
        onChange={ (ev) => { setColumn(ev.target.value); } }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period ">rotation_period </option>
        <option value="surface_water ">surface_water </option>
      </select>

      <select
        name="range"
        id="range"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (ev) => setComparison(ev.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        name="value"
        id="value"
        data-testid="value-filter"
        value={ value }
        onChange={ (ev) => setValue(ev.target.value) }
      />

      <button
        data-testid="button-filter"
        type="submit"
        id="button-filter"
        name="button-filter"
        onClick={ handleAddFilter }
      >
        Filtrar
      </button>

    </fieldset>
  );
}

export default NumericFilters;
