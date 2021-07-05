import React, { useContext } from 'react';
import Context from '../context/Context';

function Comparison() {
  const {
    setColumnSelected, setComparisonSelected, setValueToBeCompared, handleClick,
  } = useContext(Context);
  return (
    <form>
      <select
        name="column-filter"
        data-testid="column-filter"
        onChange={ (event) => setColumnSelected(event.target.value) }
      >
        <option>select</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={ (event) => setComparisonSelected(event.target.value) }
      >
        <option>select</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="value-filter"
        data-testid="value-filter"
        type="number"
        onChange={ (event) => setValueToBeCompared(event.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filter
      </button>
    </form>
  );
}

export default Comparison;
