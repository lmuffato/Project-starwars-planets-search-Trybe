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

function generateColumnSort(nome, label, optionArray, handleSelect) {
  return (
    <label htmlFor={ nome }>
      {label}
      <select
        name={ nome }
        id={ nome }
        data-testid="column-sort"
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

function generateButton(label, handleClick, dataTestId) {
  return (
    <button
      type="button"
      onClick={ handleClick }
      data-testid={ dataTestId }
    >
      {label}
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

function generateRadiosSort(name, label, values, handleRadios) {
  return (
    <label htmlFor={ name }>
      {label}
      <input
        type="radio"
        data-testid={ `column-sort-input-${values}` }
        id={ name }
        name={ name }
        value={ values.toUpperCase() }
        onClick={ handleRadios }
      />
    </label>
  );
}

export default function FilterByNumerics() {
  const [numericValuesFilter, setNumericValuesFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const [orderByFilters, setOrderByFilters] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const {
    filterByNumericValues,
    removeFilter,
    filterByOrder,
    dataColumn,
  } = useContext(AppContext);
  const [activeFilters, setActiveFilters] = useState([]);

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

  function handleSortFilters({ target: { name, value } }) {
    setOrderByFilters({ ...orderByFilters, [name]: value });
  }

  function handleSortButton() {
    filterByOrder(orderByFilters);
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
      {generateButton('Filtrar', handleClick, 'button-filter')}
      { generateActiveFilters(activeFilters, handleRemoveFilter) }
      {generateColumnSort('column', 'Ordene por', dataColumn, handleSortFilters)}
      {generateRadiosSort('sort', 'Asc', 'asc', handleSortFilters)}
      {generateRadiosSort('sort', 'Desc', 'desc', handleSortFilters)}
      {generateButton('Sort', handleSortButton, 'column-sort-button')}
    </div>
  );
}
