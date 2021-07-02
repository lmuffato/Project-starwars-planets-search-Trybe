import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterList() {
  const { filters: { filterByNumericValues },
    setfilterByNumericValues } = useContext(PlanetsContext);

  // Lógica de remoção de filtro inspirada na resolução do exercício
  // de Redux do freeCodeCamp: Remove an Item from an Array
  // bem como conforme colocado no meu projeto trybewallet
  // https://github.com/tryber/sd-010-a-project-trybewallet/blob/gustavofds-project-trybewallet/src/reducers/wallet.js
  function onClick(index) {
    setfilterByNumericValues(
      filterByNumericValues
        .slice(0, index)
        .concat(filterByNumericValues.slice(index + 1)),
    );
  }

  return (
    <div>
      { filterByNumericValues.map((filter, index) => (
        <p key={ index } data-testid="filter">
          <span>{ `${filter.column} ${filter.comparison} ${filter.value}` }</span>
          { ' ' }
          <button onClick={ () => onClick(index) } type="button">X</button>
        </p>
      )) }
    </div>
  );
}

export default FilterList;
