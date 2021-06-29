import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterComponent() {
  const [numberFilter, setNumberFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const { filters, setFilterName, setfilterByNumericValues } = useContext(PlanetsContext);

  function handleNumericalFilterChange(ev) {
    const { value, id } = ev.target;
    setNumberFilter((prevFilter) => ({
      ...prevFilter,
      [id]: value,
    }));
  }

  function onClick() {
    setfilterByNumericValues((prevFilter) => ([
      ...prevFilter,
      numberFilter,
    ]));
  }

  return (
    <>
      <input
        value={ filters.filterByName.name }
        onChange={ (event) => setFilterName(event.target.value) }
        data-testid="name-filter"
        type="text"
        placeholder="Search by text"
      />
      <div>
        <label
          htmlFor="column"
        >
          Coluna
          <select
            value={ numberFilter.column }
            onChange={ handleNumericalFilterChange }
            data-testid="column-filter"
            id="column"
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        { ' ' }
        <label
          htmlFor="comparison"
        >
          Comparador
          <select
            value={ numberFilter.comparison }
            onChange={ handleNumericalFilterChange }
            data-testid="comparison-filter"
            id="comparison"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        { ' ' }
        <input
          value={ numberFilter.value }
          onChange={ handleNumericalFilterChange }
          data-testid="value-filter"
          type="number"
          placeholder="Type number"
          id="value"
        />
        { ' ' }
        <button
          type="button"
          data-testid="button-filter"
          onClick={ onClick }
        >
          Add Filter
        </button>
      </div>
    </>
  );
}

export default FilterComponent;
