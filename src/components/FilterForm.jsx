import React, { useContext, useState } from 'react';
import StarwarsContext from '../context/context';

export default function FilterForm() {
  const { filters, setFilters, columnFiltersState } = useContext(StarwarsContext);
  const [usefulFilter, setUsefulFilter] = useState(columnFiltersState);
  const [filterNumeric, setFilter] = useState({
    column: usefulFilter[0],
    comparison: 'maior que',
    value: 0,
  });
  const { filterByName } = filters;
  const { name } = filterByName;

  const handleNameInput = ({ target: { value } }) => {
    setFilters((pastState) => ({
      ...pastState,
      filterByName: {
        name: value,
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
    let newUseful = usefulFilter;
    newUseful = newUseful.filter((element) => element !== filterNumeric.column);
    setUsefulFilter(newUseful);
    setFilter((pastState) => ({ ...pastState, column: newUseful[0] }));
  };

  const filterFilters = () => {
    let usedList = columnFiltersState;
    const { filterByNumericValues } = filters;
    filterByNumericValues.forEach(({ column }) => {
      usedList = usedList.filter((filter) => filter !== column);
    });
    return usedList.map((column) => (
      <option key={ column } value={ column }>
        {column}
      </option>));
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
          {filterFilters()}
        </select>
        <select
          data-testid="comparison-filter"
          id="comparison"
          value={ filterNumeric.comparison }
          onChange={ handleFilters }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          id="value"
          value={ filterNumeric.value }
          onChange={ handleFilters }
          data-testid="value-filter"
        />
        <button
          onClick={ handleFiltersButton }
          type="button"
          data-testid="button-filter"
        >
          Adicionar filtro
        </button>
      </div>
    </div>
  );
}
