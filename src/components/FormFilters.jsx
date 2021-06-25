import React, { useContext, useState } from 'react';
import ContextPlanets from '../context/ContextPlanets';
import { comparisonOptions } from '../context/ProviderPlanets';

function FormFilters() {
  const [column, setColumnState] = useState('population');
  const [comparison, setComparisonState] = useState('maior que');
  const [valueFilter, setValueState] = useState(0);

  const { updateNumericFilter, updateNameFilter,
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

    </form>
  );
}

export default FormFilters;
