import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

function ActiveFilters() {
  const { filters, updateNameFilter, deleteNumericFilter } = useContext(ContextPlanets);
  const { filterByName, filterByNumericValues } = filters;
  const filterList = filterByName.name === ''
    ? []
    : ([
      <li key="namefilter">
        {filterByName.name}
        <button
          type="button"
          onClick={ () => updateNameFilter('') }
        >
          X
        </button>
      </li>,
    ]);
  filterByNumericValues.forEach((filter, index) => {
    const { column, comparison, value } = filter;
    filterList.push(
      (
        <li key={ index } data-testid="filter">
          {`${column} ${comparison} ${value}`}
          <button
            type="button"
            onClick={ () => deleteNumericFilter(column) }
          >
            X
          </button>
        </li>
      ),
    );
  });
  return (
    <ul>
      {filterList}
    </ul>
  );
}

export default ActiveFilters;
