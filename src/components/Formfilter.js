import React, { useContext } from 'react';
import context from '../store/Context';

function Formfilter() {
  const { setNumericValues } = useContext(context);

  const handleClick = () => {
    setNumericValues({
      filterByNumericValues: [{
        column: document.querySelector('#column-filter').value,
        comparison: document.querySelector('#comparison-filter').value,
        value: document.querySelector('#value-filter').value,
      }],
    });
  };
  return (
    <form>
      <select data-testid="column-filter" id="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select data-testid="comparison-filter" id="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="valueInput">
        <input
          type="number"
          name="valueInput"
          data-testid="value-filter"
          id="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        filtrar
      </button>
    </form>
  );
}

export default Formfilter;
