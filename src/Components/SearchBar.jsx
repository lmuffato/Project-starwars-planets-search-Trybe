import React, { useContext } from 'react';
import context from '../Provider/Context';

function SearchBar() {
  const { filters, setFilter } = useContext(context);
  const filtered = ({ target }) => {
    setFilter({
      ...filters,
      filterByName: {
        name: target.value,
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
