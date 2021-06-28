// Requisito 5 - exibe os filtros criados e cria um botão para excluir o mesmo.
import React, { useContext } from 'react';
import Context from '../context/Context';

function ShowFilters() {
  const { deleteFilters, filters: { filterByNumericValues } } = useContext(Context);
  return (
    <ul>
      <p>Filtros:</p>
      {filterByNumericValues.map((filter, index) => (
        <li key={ index } data-testid="filter">
          { filter.column}
          {' '}
          { filter.comparison}
          {' '}
          { filter.value}
          {' '}
          <button type="button" onClick={ () => deleteFilters(filter.column) }>X</button>
        </li>))}
    </ul>
  );
}

export default ShowFilters;
