import React, { useContext } from 'react';
import contextStarWars from '../context/Context';

function filterByName(setName) {
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ ({ target }) => setName(target.value) }
    />
  );
}

function saveFilter(filterDiv, setNumeralValue) {
  const column = filterDiv.childNodes[0].value;
  const comparison = filterDiv.childNodes[1].value;
  const { value } = filterDiv.childNodes[2];

  const filterData = [{
    column,
    comparison,
    value,
  }];
  setNumeralValue(filterData);
}

function filterByNumber(setNumeralValue) {
  const options = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparison = ['maior que', 'menor que', 'igual a'];
  return (
    <div>
      <select data-testid="column-filter">
        { options.map((setOption) => <option key={ setOption }>{ setOption }</option>) }
      </select>
      <select data-testid="comparison-filter">
        { comparison.map((option) => <option key={ option }>{ option }</option>) }
      </select>
      <input data-testid="value-filter" />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ ({ target }) => saveFilter(target.parentNode, setNumeralValue) }
      >
        adicionar filtro
      </button>
    </div>
  );
}

function Filters() {
  const { setName, setNumeralValue } = useContext(contextStarWars);
  return (
    <form>
      { filterByName(setName) }
      { filterByNumber(setNumeralValue) }
    </form>
  );
}

export default Filters;
