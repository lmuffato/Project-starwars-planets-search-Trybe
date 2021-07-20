import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Sort() {
  const {
    inputsValues: {
      columnSort,
    },
    function: {
      handleSortColumn,
      handleSortDirection,
      // handleSortClick,
      handleSortBtn,
    },
    columnOptions,
  } = useContext(StarWarsContext);

  return (
    <div>
      <span className="bold">Coluna para ordenação:</span>
      <select
        data-testid="column-sort"
        value={ columnSort }
        onChange={ handleSortColumn }
      >
        {columnOptions.map((item) => <option key={ item }>{ item }</option>)}
      </select>

      <div>
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          name="sortGroup"
          value="ASC"
          onChange={ handleSortDirection }
        />
        Crescente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          name="sortGroup"
          value="DESC"
          onChange={ handleSortDirection }
        />
        Decrescente
      </div>

      <button
        className="numericBtn"
        data-testid="column-sort-button"
        type="button"
        onClick={ handleSortBtn }
      >
        Ordenar
      </button>

    </div>
  );
}

export default Sort;
