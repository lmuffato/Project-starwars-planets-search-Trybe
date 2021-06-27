import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const FilterBar = () => {
  const { filters, setFilters } = useContext(AppContext);
  const [column, setColumn] = useState('population');
  const [filterBy, setFilterBy] = useState('maior que');
  const [saveValue, setSaveValue] = useState(0);

  const filterByName = ({ value }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  const filterByNumber = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, {
        column,
        filterBy,
        value: saveValue,
      }],
    });
  };

  return (
    <>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="nome"
        onChange={ ({ target }) => filterByName(target) }
      />

      <select
        data-testid="column-filter"
        name="column"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ ({ target }) => setFilterBy(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setSaveValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterByNumber }
      >
        Filtrar
      </button>
    </>
  );
};

export default FilterBar;
