import React from 'react';
import useFilter from '../../hooks/useFilter';
import useStarWars from '../../hooks/useStarWars';

export default function RemoveFilters() {
  const { removeFilter } = useStarWars();
  const { filteredCategories } = useFilter();

  return (
    <div>
      {filteredCategories.map((category) => (
        <div data-testid="filter" key={ category }>
          {category}
          <button
            type="button"
            onClick={ (e) => removeFilter(e.target.name) }
            name={ category }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
