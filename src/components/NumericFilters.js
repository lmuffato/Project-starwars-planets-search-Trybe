import React, { useContext, useState } from 'react';

import TableDataContext from '../context/TableDataContext';
import { comparisons } from '../utils';

const NumericFilters = () => {
  const { addFilterByNumericValue, availableColumns } = useContext(TableDataContext);
  const [state, setState] = useState({
    'column-filter': availableColumns[0],
    'comparison-filter': comparisons[0],
    'value-filter': '',
  });

  const handleOnChange = ({ target: { name, value } }) => {
    console.log(name);
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <label htmlFor="column-filter">
        Coluna
        <select
          onChange={ handleOnChange }
          name="column-filter"
          data-testid="column-filter"
        >
          {availableColumns.map(((col) => <option key={ col }>{col}</option>))}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparação
        <select
          onChange={ handleOnChange }
          name="comparison-filter"
          data-testid="comparison-filter"
        >
          {comparisons.map(
            (comparison) => <option key={ comparison }>{comparison}</option>,
          )}
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor
        <input
          onChange={ handleOnChange }
          name="value-filter"
          data-testid="value-filter"
        />
      </label>
      <button
        onClick={ () => addFilterByNumericValue(
          { column: state['column-filter'],
            comparison: state['comparison-filter'],
            value: state['value-filter'] },
        ) }
        type="button"
        data-testid="button-filter"
      >
        Adicionar filtro
      </button>
    </>
  );
};

export default NumericFilters;
