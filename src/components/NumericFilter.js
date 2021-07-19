import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/table.css';

function NumericFilter() {
  const {
    inputsValues: {
      column,
      comparison,
      value,
    },
    filters: {
      filterByNumericValues,
    },
    function: {
      handleColumn,
      handleComparison,
      handleValue,
      addFilter,
      deleteFilter,
    },
    columnOptions,
  } = useContext(StarWarsContext);

  return (
    <>
      <span className="filter">Filtros:</span>

      <label htmlFor="columnInput">
        Parâmetro:
        <select
          name="columnInput"
          id="columnInput"
          data-testid="column-filter"
          value={ column }
          onChange={ handleColumn }
        >
          {columnOptions.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>

      <label htmlFor="comparisonInput">
        Comparação (maior que, menor que ou igual a):
        <select
          name="comparisonInput"
          id="comparisonInput"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ handleComparison }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>

      <label htmlFor="valueInput">
        Valor para comparação:
        <input
          name="valueInput"
          id="valueInput"
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ handleValue }
        />
      </label>

      <button
        className="numericBtn"
        data-testid="button-filter"
        onClick={ addFilter }
        type="button"
      >
        Pesquisar
      </button>
      {filterByNumericValues.map((item) => (
        <div key={ item.column } data-testid="filter">
          <span className="bold">Remover o filtro: </span>
          <button
            className="removeFilter"
            type="button"
            onClick={ () => deleteFilter(item.column) }
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}

export default NumericFilter;
