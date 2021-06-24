import React, { useContext } from 'react';
import Context from '../context/Context';

function nameFilter(setName) {
  return (
    <input
      data-testid="name-filter"
      onChange={ ({ target }) => setName(target.value) }
    />
  );
}

function saveFilterData(filterDiv, setNumericValues) {
  const column = filterDiv.childNodes[0].value;
  const comparison = filterDiv.childNodes[1].value;
  const { value } = filterDiv.childNodes[2];

  const newFilterData = [{
    column,
    comparison,
    value,
  }];
  setNumericValues(newFilterData);
}

function numberFilter(setNumericValues) {
  const changeOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparison = ['maior que', 'menor que', 'igual a'];
  return (
    <div>
      <select data-testid="column-filter">
        {changeOptions.map((option) => <option key={ option }>{ option }</option>)}
      </select>
      <select data-testid="comparison-filter">
        {comparison.map((option) => <option key={ option }>{ option }</option>)}
      </select>
      <input data-testid="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ ({ target }) => saveFilterData(target.parentNode, setNumericValues) }
      >
        Adiciona filtro
      </button>
    </div>
  );
}

function Filter() {
  const { setName, setNumericValues } = useContext(Context);
  return (
    <form>
      { nameFilter(setName) }
      { numberFilter(setNumericValues) }
    </form>
  );
}

export default Filter;
