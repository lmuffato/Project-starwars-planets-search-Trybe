import React, { useContext } from 'react';
import starWarContext from '../context/starWarsContext';

export default function LoadFilters() {
  const { newFilter, setNewFilter } = useContext(starWarContext);

  const deleteFilter = (column) => {
    const filterNew = newFilter.filter((r) => r.column !== column);
    setNewFilter(filterNew);
  };

  return (
    <div>
      { newFilter.map((r, index) => (
        <div
          data-testid="filter"
          key={ index }
        >
          { r.column }
          { r.comparison }
          { r.value }
          <button
            type="button"
            onClick={ () => deleteFilter(r.column) }
          >
            x
          </button>
        </div>
      )) }
    </div>
  );
}
