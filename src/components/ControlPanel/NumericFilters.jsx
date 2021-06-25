import React, { useState } from 'react';
import useStarWars from '../../hooks/useStarWars';
import { optionsColumnObj, optionsComparisonObj } from '../../services/data';
// import Button from '../Generics/Button';
import Input from '../Generics/Input';
import Select from '../Generics/Select';

function NumericFilters() {
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparisonType, setFilterComparisonType] = useState('maior que');
  const [filterValue, setFilterValue] = useState('');

  const {
    filterByNumericValues,
    setFiltersByNumericValue,
    // getFilteredPlanets,
  } = useStarWars();

  const handleChangeColumn = (event) => {
    setFilterColumn(event.target.value);
    // console.log(event.target.value);
  };

  const handleChangeComparisonType = (event) => {
    setFilterComparisonType(event.target.value);
    // console.log(event.target.value);
  };

  const handleChangeFilterValue = (event) => {
    setFilterValue(event.target.value);
    // console.log(event.target.value);
  };

  const handleClickOnFilterButton = () => {
    // event.preventDefault();
    setFiltersByNumericValue(
      // [...filterByNumericValues, { filterColumn, filterComparisonType, filterValue }],
      filterByNumericValues.concat({
        filterColumn,
        filterComparisonType,
        filterValue,
      }),
    );
    // console.log(filterByNumericValues);
    // getFilteredPlanets();
  };

  return (
    <div>
      <Select
        name="column"
        dataTestid="column-filter"
        options={ optionsColumnObj }
        value={ filterColumn }
        onChange={ handleChangeColumn }
        placeholder="Selecione uma opção"
      />
      <Select
        name="comparison"
        options={ optionsComparisonObj }
        dataTestid="comparison-filter"
        placeholder="Selecione uma opção"
        value={ filterComparisonType }
        onChange={ handleChangeComparisonType }
      />
      <Input
        name="value"
        data-testid="value-filter"
        type="number"
        placeholder="Digite um valor"
        value={ filterValue }
        onChange={ handleChangeFilterValue }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClickOnFilterButton }
      >
        Adicionar filtros
      </button>
    </div>
  );
}

export default NumericFilters;
