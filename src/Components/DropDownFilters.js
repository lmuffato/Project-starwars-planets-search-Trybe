import React, { useContext } from 'react';
import ContextApi from './ContextApi';

// fazer função para que o button pegue as alterações.
// um state que seta tudo.
// sets column, comparison e value => um pra cada select e iput. no botão manda tudo pro estado global.
function DropDownFilters() {
  const {
    setColumn,
    setComparison,
    setValue } = useContext(ContextApi);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option> </option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option> </option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => setValue(target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
      >
        Add Filters
      </button>
    </div>
  );
}

export default DropDownFilters;
