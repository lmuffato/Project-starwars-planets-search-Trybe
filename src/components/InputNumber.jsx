import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import { optionsColumn, optionsComparison } from '../context/data';

function InputNumber() {
  const [columnOption, setColumnOption] = useState(optionsColumn); // armazena o array de colunas conforme é selecionado

  const {
    columnFilter,
    setColumnFilter,
    comparisonFilter,
    setComparisonFilter,
    valueFilter,
    setValueFilter,
    newState,
    setNewState,
    getNames } = useContext(StarWarsContext);

  const handleClick = () => {
    const newFilter = { // aqui cria um objeto com os valores digitados pelo usuário e seta conforme as chaves pedidas no requisito
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };

    const objFilter = { // aqui seto todos os valores digitados e escolhidos pelo usuário na filtragem
      filters: {
        filterByName: {
          name: getNames,
        },
        filterByNumericValues: [
          ...newState.filters.filterByNumericValues, newFilter,
        ],
      },
    };
    setNewState(objFilter);
    // console.log(newFilter);
    // console.log(newState);

    // cria uma constante que filtra todos os valores diferentes da coluna selecionada pelo usuário
    const newColumnOptions = columnOption.filter((column) => column !== newFilter.column);
    setColumnOption(newColumnOptions); // seta a nova coluna no estado da aplicação
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        {columnOption.map((column) => (
          <option key={ column }>{column}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ (e) => setComparisonFilter(e.target.value) }
      >
        {optionsComparison.map((comparison) => (
          <option key={ comparison }>{comparison}</option>
        ))}
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default InputNumber;
