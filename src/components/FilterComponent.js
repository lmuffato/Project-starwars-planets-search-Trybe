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
  const [orderColumn, setOrderColumn] = useState('Name');
  const [sortValue, setSortValue] = useState('ASC');

  const {
    filters,
    setFilterName, setfilterByNumericValues, setOrder } = useContext(PlanetsContext);

  function handleNumericalFilterChange(ev) {
    const { value, id } = ev.target;
    setNumberFilter((prevFilter) => ({
      ...prevFilter,
      [id]: value,
    }));
  }

  function handleSortColumnChange(ev) {
    const { value } = ev.target;
    setOrderColumn(value);
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

  function handleSortChange(ev) {
    setSortValue(ev.target.value);
  }

  function handleSortSubmit() {
    setOrder({
      column: orderColumn,
      sort: sortValue,
    });
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
      <div>
        <label
          htmlFor="column-sort"
        >
          Coluna
          <select
            data-testid="column-sort"
            id="column-sort"
            value={ orderColumn }
            onChange={ handleSortColumnChange }
          >
            <option value="Name">Name</option>
            <option value="population">Population</option>
            <option value="orbital_period">Orbital Period</option>
          </select>
        </label>
        <div value={ sortValue } onChange={ handleSortChange }>
          <input
            type="radio"
            name="sort"
            data-testid="column-sort-input-asc"
            value="ASC"
            defaultChecked
          />
          Ascending
          <input
            type="radio"
            name="sort"
            data-testid="column-sort-input-desc"
            value="DESC"
          />
          Descending
        </div>
        <button
          onClick={ handleSortSubmit }
          type="button"
          data-testid="column-sort-button"
        >
          Submit Sorting
        </button>
      </div>
    </>
  );
}

export default FilterComponent;
