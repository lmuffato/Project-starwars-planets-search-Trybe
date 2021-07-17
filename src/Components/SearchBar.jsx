import React, { useContext } from 'react';
import context from '../Provider/Context';

function SearchBar() {
  const { filters, setFilters } = useContext(context);
  const filtered = ({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        names: target.value,
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        data-testid="name-filter"
        onChange={ (e) => filtered(e) }
      />
    </div>
  );
}

export default SearchBar;
