import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';
import SortFilter from './SortFilter';

function SearchInput() {
  const { filters, setFilters } = useContext(planetsContext);
  const handleChange = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  return (
    <div>
      <label htmlFor="searchByName">
        Search Planet By Name:
        {' '}
        <input
          id="searchByName"
          data-testid="name-filter"
          type="text"
          placeholder="Planet Name..."
          onChange={ handleChange }
        />
      </label>
      <SortFilter />
    </div>
  );
}

export default SearchInput;
