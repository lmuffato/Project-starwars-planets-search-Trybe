import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

const FilterBar = () => {
  const { filters, setFilters } = useContext(AppContext);
  const [savedColumn, setSavedColumn] = useState('population');
  const [filterBy, setFilterBy] = useState('maior que');
  const [saveValue, setSaveValue] = useState(0);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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
        column: savedColumn,
        filterBy,
        value: saveValue,
      }],
    });
    options.splice(options.indexOf(savedColumn), 1);
    setOptions(options);
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
        onChange={ ({ target }) => setSavedColumn(target.value) }
      >
        {options.map((column) => (
          <option key={ column } value={ column }>{column}</option>
        ))}
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
