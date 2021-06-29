import React, { useContext } from 'react';
import ContextAPI from '../context/ContextAPI';

function InputFilter() {
  const { handleChange, setFilterColumn, setFilterComparison,
    setFilterValue, handleClick } = useContext(ContextAPI);
  return (
    <div>
      <h3>Filter</h3>
      <label htmlFor="filter">
        Filter Name
        <input
          type="text"
          id="filter"
          data-testid="name-filter"
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <form>
        <label htmlFor="select-column">
          Filter Column
          <select
            data-testid="column-filter"
            id="select-column"
            name="column"
            onChange={ (e) => setFilterColumn(e.target.value) }
          >
            <option>Select</option>
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <label htmlFor="select-comparison">
          Filter Comparison
          <select
            data-testid="comparison-filter"
            name="comparison"
            onChange={ (e) => setFilterComparison(e.target.value) }
          >
            <option>Select</option>
            <option>maior que</option>
            <option>igual a</option>
            <option>menor que</option>
          </select>
        </label>
        <label htmlFor="input-value">
          Value
          <input
            type="number"
            data-testid="value-filter"
            name="value"
            onChange={ (e) => setFilterValue(e.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default InputFilter;
