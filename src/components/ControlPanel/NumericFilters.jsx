import React, { useState, useCallback } from 'react';
import useStarWars from '../../hooks/useStarWars';
import { optionsColumnObj, optionsComparisonObj } from '../../services/data';
import Button from '../Generics/Button';
import Input from '../Generics/Input';
import Select from '../Generics/Select';

function NumericFilters() {
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparisonType, setFilterComparisonType] = useState('maior que');
  const [filterValue, setFilterValue] = useState('');
  const [filterOptions, setFilterOptions] = useState(optionsColumnObj);

  const {
    filterByNumericValues,
    setFiltersByNumericValue,
  } = useStarWars();

  const handleChangeColumn = (event) => {
    setFilterColumn(event.target.value);
  };

  const handleChangeComparisonType = (event) => {
    setFilterComparisonType(event.target.value);
  };

  const handleChangeFilterValue = (event) => {
    setFilterValue(event.target.value);
  };

  const handleHideItemFromOptionsList = useCallback(() => {
    setFilterOptions((prevState) => (
      prevState.filter((item) => (
        item !== filterByNumericValues.filterColumn
      ))
    ));
  }, [filterByNumericValues.filterColumn]);

  // Requisito 03 - add filtros -- parte do req. 05 tbm
  const handleClickOnFilterButton = useCallback((event) => {
    event.preventDefault();
    setFiltersByNumericValue(
      filterByNumericValues.concat({
        filterColumn,
        filterComparisonType,
        filterValue,
      }),
    );
    console.log(filterByNumericValues);
    handleHideItemFromOptionsList();
  }, [filterByNumericValues,
    filterColumn,
    filterComparisonType,
    filterValue, handleHideItemFromOptionsList, setFiltersByNumericValue]);

  return (
    <div>
      <Select
        name="filterColumn"
        dataTestid="column-filter"
        options={ filterOptions }
        value={ filterColumn }
        onChange={ handleChangeColumn }
        placeholder="Selecione uma opção"
      />
      <Select
        name="filterComparisonType"
        options={ optionsComparisonObj }
        dataTestid="comparison-filter"
        placeholder="Selecione uma opção"
        value={ filterComparisonType }
        onChange={ handleChangeComparisonType }
      />
      <Input
        name="filterValue"
        data-testid="value-filter"
        type="number"
        placeholder="Digite um valor"
        value={ filterValue }
        onChange={ handleChangeFilterValue }
      />
      <Button
        data-testid="button-filter"
        onClick={ handleClickOnFilterButton }
      >
        Adicionar filtros
      </Button>
    </div>
  );
}

export default NumericFilters;

// Sobre o hook useCallback:
// --> https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback
// Para função handleHideItemFromOptionsList foi consultado o PR abaixo:
// ---> https://github.com/tryber/sd-07-project-starwars-datatable-hooks/pull/108/files
// Referências sobre componentes controlados utilizando React Hooks:
// --> https://www.udemy.com/share/102AiqAEYecl5QRnoJ/
// --> https://joaopedro.dev/simplificando-formularios-com-hooks/
// --> https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
// Referências consultadas para entender lógica de filtros:
// --> https://stackoverflow.com/questions/39204823/on-off-toggle-for-filtering-content-react
// --> https://betterprogramming.pub/creating-a-multi-filter-function-to-filter-out-multiple-attributes-javascript-react-rails-5aad8e272142
