import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

function ActiveFilters() {
  const { filters, updateNumericFilter, updateNameFilter } = useContext(ContextPlanets);
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
  console.log(filterList);
  filterByNumericValues.forEach((filter, index) => {
    const { column, comparison, value } = filter;
    if (filter.value !== 0) {
      filterList.push(
        (
          <li key={ index }>
            {`${column} ${comparison} ${value}`}
            <button
              type="button"
              onClick={ () => updateNumericFilter({ column, comparison: '', value: '' }) }
            >
              X
            </button>
          </li>
        ),
      );
    }
  });
  return (
    <ul>
      {filterList}
    </ul>
  );
}

export default ActiveFilters;
