import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterComponent() {
  const [columnsFilter, setColumnsFilter] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [numberFilter, setNumberFilter] = useState({
    column: columnsFilter[0],
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
    setColumnsFilter(
      columnsFilter.filter((column) => column !== numberFilter.column),
    );
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
            { columnsFilter.includes('population')
              && <option value="population">population</option> }
            { columnsFilter.includes('orbital_period')
            && <option value="orbital_period">orbital_period</option> }
            { columnsFilter.includes('diameter')
              && <option value="diameter">diameter</option> }
            { columnsFilter.includes('rotation_period')
            && <option value="rotation_period">rotation_period</option> }
            { columnsFilter.includes('surface_water')
            && <option value="surface_water">surface_water</option> }
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
