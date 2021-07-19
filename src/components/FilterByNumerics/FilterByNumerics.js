import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';

function generateSelectColums(nome, label, optionArray, handleSelect) {
  return (
    <label htmlFor={ nome }>
      {label}
      <select
        name={ nome }
        id={ nome }
        onChange={ handleSelect }
        data-testid="column-filter"
      >
        {optionArray.map((element, index) => <option key={ index }>{element}</option>)}
      </select>
    </label>
  );
}

function generateSelectComparison(nome, label, optionArray, handleSelect) {
  return (
    <label htmlFor={ nome }>
      {label}
      <select
        name={ nome }
        id={ nome }
        data-testid="comparison-filter"
        onChange={ handleSelect }
      >
        {optionArray.map((element, index) => <option key={ index }>{element}</option>)}
      </select>
    </label>
  );
}

function generateInputNumber(label, handleNumber) {
  return (
    <label htmlFor="number">
      {label}
      <input
        type="number"
        name="value"
        data-testid="value-filter"
        onChange={ handleNumber }
      />
    </label>
  );
}

function generateButton(handleClick) {
  return (
    <button
      type="button"
      onClick={ handleClick }
      data-testid="button-filter"
    >
      Filtrar
    </button>
  );
}

function generateActiveFilters(activeFilters, handleRemoveFilter) {
  return (
    <div>
      { activeFilters.map((filter) => (
        <ul data-testid="filter" key={ `${filter}-filter-button` }>
          <li>{filter}</li>
          <button type="button" onClick={ handleRemoveFilter } name={ filter }>
            X
          </button>
        </ul>
      ))}
    </div>
  );
}

export default function FilterByNumerics() {
  const [numericValuesFilter, setNumericValuesFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const {
    filterByNumericValues,
    removeFilter,
  } = useContext(AppContext);
  const [activeFilters, setActiveFilters] = useState([]);

  // const { column, comparison, value } = numericValuesFilter;

  function handleFilter({ target: { name, value } }) {
    setNumericValuesFilters({
      ...numericValuesFilter,
      [name]: value,
    });
  }

  const handleClick = () => {
    filterByNumericValues(numericValuesFilter);
    setActiveFilters([...activeFilters, numericValuesFilter.column]);
  };

  function handleRemoveFilter({ target: { name } }) {
    removeFilter(name);
    setActiveFilters([...activeFilters.filter((filter) => filter !== name)]);
  }

  const optionPlanets = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const optionComparison = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <div>
      {generateSelectColums(
        'column',
        'Filtre por coluna',
        optionPlanets,
        handleFilter,
      )}
      {generateSelectComparison(
        'comparison',
        'Filtre por comparação',
        optionComparison,
        handleFilter,
      )}
      {generateInputNumber('Coloque seu número', handleFilter)}
      {generateButton(handleClick)}
      { generateActiveFilters(activeFilters, handleRemoveFilter) }

    </div>
  );
}
