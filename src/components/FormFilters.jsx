import React, { useContext, useState } from 'react';
import ContextPlanets from '../context/ContextPlanets';
import { comparisonOptions, columnTitle } from '../context/ProviderPlanets';

function FormFilters() {
  const [column, setColumnState] = useState('population');
  const [comparison, setComparisonState] = useState('maior que');
  const [valueFilter, setValueState] = useState(0);
  const [columnSort, setColumnSort] = useState('name');
  const [directionSort, setDirectionSort] = useState('ASC');

  const { updateNumericFilter, updateNameFilter, updateSortKey,
    filters, filterColumnOptions } = useContext(ContextPlanets);

  return (
    <form>
      <label htmlFor="name">
        Filtre pelo nome:
        <input
          type="text"
          id="name"
          data-testid="name-filter"
          value={ filters.name }
          onChange={ ({ target: { value } }) => updateNameFilter(value) }
        />
      </label>
      <fieldset>
        Selecione o filtro numérico
        <label htmlFor="column">
          tipo:
          <select
            id="column"
            data-testid="column-filter"
            value={ column }
            onChange={ ({ target: { value } }) => setColumnState(value) }
          >
            {filterColumnOptions.map((columnOtion, index) => (
              <option key={ index }>{columnOtion}</option>
            ))}
          </select>
        </label>

        <label htmlFor="comparison">
          comparação:
          <select
            id="comparison"
            data-testid="comparison-filter"
            value={ comparison }
            onChange={ ({ target: { value } }) => setComparisonState(value) }
          >
            {comparisonOptions.map((comparisonOtion, index) => (
              <option key={ index }>{comparisonOtion}</option>
            ))}
          </select>
        </label>

        <label htmlFor="value">
          valor:
          <input
            id="value"
            type="number"
            data-testid="value-filter"
            value={ valueFilter }
            onChange={ ({ target: { value } }) => setValueState(value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={
            () => updateNumericFilter({ column, comparison, value: valueFilter })
          }
        >
          Filtrar
        </button>

      </fieldset>

      <fieldset>
        Ordene por algo:
        <label htmlFor="column-sort">
          tipo:
          <select
            id="column-sort"
            data-testid="column-sort"
            value={ columnSort }
            onChange={ ({ target: { value } }) => setColumnSort(value) }
          >
            {columnTitle.map((columnOtion, index) => (
              <option key={ index }>{columnOtion}</option>
            ))}
          </select>
        </label>
        <label htmlFor="ascend">
          <input
            type="radio"
            name="sort"
            id="ascend"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ ({ target: { value } }) => setDirectionSort(value) }
          />
          Crescente
        </label>
        <label htmlFor="descend">
          <input
            type="radio"
            name="sort"
            id="descend"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ ({ target: { value } }) => setDirectionSort(value) }
          />
          Descrescente
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={
            () => updateSortKey({ column: columnSort, sort: directionSort })
          }
        >
          Ordenar
        </button>

      </fieldset>

    </form>
  );
}

export default FormFilters;
