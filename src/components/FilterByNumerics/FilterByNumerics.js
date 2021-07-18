import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

function filterMain(select, comparison, value, data) {
  switch (comparison) {
  case 'maior que':
    return data.filter(
      (planet) => planet[select] > Number(value) && planet[select] !== 'unknown',
    );
  case 'menor que':
    return data.filter(
      (planet) => planet[select] < Number(value) && planet[select] !== 'unknown',
    );

  case 'igual a':
    return data.filter(
      (planet) => planet[select] === value && planet[select] !== 'unknown',
    );
  default:
    break;
  }
  return null;
}

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
        onClick={ handleSelect }
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
        name="number"
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

export default function FilterByNumerics() {
  const {
    setFilterColumn,
    filterColumn,
    setComparison,
    comparison,
    setValueNumber,
    valueNumber,
    newData,
    setNewData,
  } = useContext(AppContext);

  const handleSelectColumn = ({ target: { value } }) => {
    setFilterColumn(value);
  };

  const handleSelectComparison = ({ target: { value } }) => {
    setComparison(value);
  };

  const handleNumber = ({ target: { value } }) => {
    setValueNumber(value);
  };

  const handleClick = () => {
    setNewData(filterMain(filterColumn, comparison, valueNumber, newData));
  };

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
        'filterBySelect',
        'Filtre por coluna',
        optionPlanets,
        handleSelectColumn,
      )}
      {generateSelectComparison(
        'filterBySelect',
        'Filtre por comparação',
        optionComparison,
        handleSelectComparison,
      )}

      {generateInputNumber('Coloque seu número', handleNumber)}
      {generateButton(handleClick)}
    </div>
  );
}
