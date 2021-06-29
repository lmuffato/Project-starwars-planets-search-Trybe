import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';

export default function Filters() {
  const { filters: { filterByNumericValues }, removeFilter } = useContext(PlanetContext);
  return (
    <ul>
      {
        filterByNumericValues.map((filter, id) => {
          const { column, comparison, value } = filter;
          return (
            <li key={ id } data-testid="filter">
              {
                `{ column: ${column}, comparison: ${comparison}, value: ${value} } - `
              }
              <button
                type="button"
                onClick={ () => removeFilter(filter) }
              >
                x
              </button>
            </li>
          );
        })
      }
    </ul>
  );
}
