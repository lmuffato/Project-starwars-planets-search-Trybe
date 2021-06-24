import React, { useContext, useState } from 'react';
import StarwarsContext from '../context/context';

export default function FilterForm() {
  const { filters, setFilters } = useContext(StarwarsContext);
  const [filterNumeric, setFilter] = useState({
    column: 'population',
    comparison: 'maior',
    value: 0,
  });
  const { filterByName } = filters;
  const { name } = filterByName;

  const handleNameInput = ({ target }) => {
    setFilters((pastState) => ({
      ...pastState,
      filterByName: {
        name: target.value,
      },
    }));
  };

  const handleFilters = ({ target }) => {
    const { id, value } = target;
    setFilter((pastState) => ({
      ...pastState,
      [id]: value,
    }));
  };

  const handleFiltersButton = () => {
    setFilters((pastState) => ({
      ...pastState,
      filterByNumericValues: [...pastState.filterByNumericValues, filterNumeric],
    }));
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleNameInput }
      />
      <div>
        <select
          data-testid="column-filter"
          id="column"
          value={ filterNumeric.column }
          onChange={ handleFilters }
        >
          <option values="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          id="comparison"
          value={ filterNumeric.comparison }
          onChange={ handleFilters }
        >
          <option value="maior">maior que</option>
          <option value="menor">menor que</option>
          <option value="igual">igual a</option>
        </select>
        <input
          type="number"
          id="value"
          value={ filterNumeric.value }
          onChange={ handleFilters }
        />
        <button
          onClick={ handleFiltersButton }
          type="button"
        >
          Adicionar filtro
        </button>
      </div>
    </div>
  );
}
