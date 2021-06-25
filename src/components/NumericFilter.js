import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function NumericFilter() {
  const [column] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
  const [columnFilter, setColumnFilter] = useState('population');
  const [operation, setOperation] = useState('maior que');
  const [number, setNumber] = useState();
  const { data, setReturnData } = useContext(SWContext);

  function handleColumn(event) {
    setColumnFilter(event.target.value);
  }

  function handleOperation(event) {
    setOperation(event.target.value);
  }

  function handleChange(event) {
    setNumber(event.target.value);
  }

  function handleClick() {
    let filtered = [];
    switch (operation) {
    case 'menor que':
      filtered = data.filter((planet) => (
        Number(planet[columnFilter]) < Number([number])));
      break;
    case 'igual a':
      filtered = data.filter((planet) => (
        Number(planet[columnFilter]) === Number([number])));
      break;
    default:
      filtered = data.filter((planet) => (
        Number(planet[columnFilter]) > Number([number])));
      break;
    }
    setReturnData(filtered);
  }

  return (
    <div>
      <label htmlFor="property">
        Filtrar Numericamente:
        <select
          id="property"
          name="property"
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ handleColumn }
        >
          {column.map((string, index) => (
            <option key={ index } value={ string }>{string}</option>))}
        </select>
        <select
          id="property"
          name="property"
          data-testid="comparison-filter"
          value={ operation }
          onChange={ handleOperation }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          onChange={ handleChange }
          value={ number }
          data-testid="value-filter"
        />
        <button
          type="button"
          onClick={ handleClick }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </label>
    </div>
  );
}

export default NumericFilter;
