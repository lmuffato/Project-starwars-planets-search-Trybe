import React, { useContext } from 'react';
import context from '../context/context';

const FormFilter = () => {
  const {
    handleNameFilter,
    handleColumnFilter,
    handleComparisonFilter,
    handleValueFilter,
    handleClick } = useContext(context);
  return (
    <header>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          id="name"
          onChange={ (event) => handleNameFilter(event.target.value) }
        />
      </div>
      <div>
        <label htmlFor="column">
          <select
            id="column"
            data-testid="column-filter"
            // value={ a }
            onChange={ (event) => handleColumnFilter(event.target.value) }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label htmlFor="comparison">
          <select
            id="comparison"
            data-testid="comparison-filter"
            // value={ a }
            onChange={ (event) => handleComparisonFilter(event.target.value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          id="value"
          onChange={ (event) => handleValueFilter(event.target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Filtrar
        </button>
      </div>
    </header>
  );
};

export default FormFilter;
