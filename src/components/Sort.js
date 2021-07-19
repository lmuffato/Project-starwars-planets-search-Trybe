import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Sort() {
  const {
    inputsValues: {
      columnSort,
      directionSort,
    },
    function: {
      handleSortColumn,
      handleSortDirection,
      // handleSortClick,
    },
    columnOptions,
    planets,
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
        onClick={ () => console.log(columnSort, directionSort) }
        // onClick={ () => console.log(planets[0].name) }
        // onClick={ handleSortClick }
      >
        Ordenar
      </button>
      {console.log(planets)}

    </div>
  );
}

export default Sort;
