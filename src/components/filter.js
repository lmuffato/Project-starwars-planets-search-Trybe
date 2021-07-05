import React, { useContext } from 'react';
import ContextFilter from '../context/contextFilter';

const column = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Filter() {
  const {
    filters,
    setFilters,
    columnFilter,
    setColumnFilter,
    compareFilter,
    setCompareFilter,
    numberFilter,
    setNumberFilter,
    newState,
    setNewState,
  } = useContext(ContextFilter);

  const handleClick = () => {
    const objNumbers = {
      column: columnFilter,
      compare: compareFilter,
      number: numberFilter,
    };
    const newObjNumber = {
      filters: {
        filterByName: { name: filters },
        filterByNumericValues: [
          ...newState.filters.filterByNumericValues, objNumbers] } };

    setNewState(newObjNumber);
  };

  return (
    <form>
      <label htmlFor="filter">
        Nome:
        <input
          value={ filters }
          data-testid="name-filter"
          type="text"
          name="name"
          onChange={ (event) => setFilters(event.target.value) }
        />
      </label>
      <select
        value={ columnFilter }
        data-testid="column-filter"
        onChange={ (event) => setColumnFilter(event.target.value) }
      >
        {column.map((columnOption) => (
          <option key={ columnOption }>{ columnOption }</option>
        ))}
      </select>
      <select
        value={ compareFilter }
        data-testid="comparison-filter"
        onChange={ (event) => setCompareFilter(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        value={ numberFilter }
        data-testid="value-filter"
        onChange={ (event) => setNumberFilter(event.target.value) }
      />
      <button
        onClick={ handleClick }
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
