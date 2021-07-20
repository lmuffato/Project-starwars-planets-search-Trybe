import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function SearchInput() {
  const { setFilters } = useContext(planetsContext);
  const handleChange = ({ target }) => {
    const { value } = target;
    setFilters({
      filterByName: { name: value },
    });
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Search by name..."
        onChange={ handleChange }
      />
    </div>
  );
}

export default SearchInput;
