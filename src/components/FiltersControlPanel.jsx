import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import {
  optionsColumnObj,
  optionsComparisonObj,
  // optionsColumn,
} from '../services/data';
import useStarWars from '../hooks/useStarWars';

function ControlPanel() {
  const {
    // setSorting,
    // swPlanets,
    // setNewArrayOfPlanets,
    filterByOtherParams,
    setFilterByOtherParams,
  } = useStarWars();

  const [filterObj, setFilterObj] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  // const [columnOp, setColumnOp] = useState(optionsColumn);

  // const handleColumnOptions = () => {
  //   setColumnOp((previousState) => previousState.filter((opt) => (
  //     opt !== filterObj.column)));
  // };

  const handleClickOnButton = (event) => {
    event.preventDefault();
    console.log(filterObj);
    setFilterByOtherParams(...filterByOtherParams, filterObj);
    // handleColumnOptions();
    console.log('click');
  };

  return (
    <div className="control-panel">
      <form className="filter-panel">
        <Select
          name="column"
          dataTestid="column-filter"
          options={ optionsColumnObj }
          placeholder="Selecione uma opção"
          onChange={ (event) => setFilterObj({
            ...filterObj,
            column: event.target.value,
          }) }
        />
        <Select
          name="comparison"
          options={ optionsComparisonObj }
          dataTestid="comparison-filter"
          placeholder="Selecione uma opção"
          onChange={ (event) => setFilterObj({
            ...filterObj,
            comparison: event.target.value,
          }) }
        />
        <Input
          name="value"
          data-testid="value-filter"
          type="number"
          placeholder="Digite um valor"
          onChange={ (event) => setFilterObj({
            ...filterObj,
            value: event.target.value,
          }) }
        />
        <Button
          data-testid="button-filter"
          onClick={ (event) => handleClickOnButton(event) }
        >
          Adicionar filtros
        </Button>
      </form>
    </div>
  );
}

export default ControlPanel;
