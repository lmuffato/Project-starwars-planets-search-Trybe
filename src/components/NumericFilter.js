import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';

function NumericFilter() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [operation, setOperation] = useState('maior que');
  const [number, setNumber] = useState();
  const { setNumericFilters, numericFilters, column, setColumn } = useContext(SWContext);

  function handleClick() {
    setNumericFilters([...numericFilters, { columnFilter, operation, number }]);
    setColumn(column.filter((item) => item !== columnFilter));
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
          onChange={ (event) => setColumnFilter(event.target.value) }
          className="numeric-filter"
        >
          {column.map((string, index) => (
            <option key={ index } value={ string }>{string}</option>))}
        </select>
        <select
          id="property"
          name="property"
          data-testid="comparison-filter"
          value={ operation }
          onChange={ (event) => setOperation(event.target.value) }
          className="numeric-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          onChange={ (event) => setNumber(event.target.value) }
          value={ number }
          data-testid="value-filter"
          className="numeric-filter"
        />
        <button
          type="button"
          onClick={ handleClick }
          data-testid="button-filter"
          className="numeric-filter"
        >
          Filtrar
        </button>
      </label>
    </div>
  );
}

export default NumericFilter;
