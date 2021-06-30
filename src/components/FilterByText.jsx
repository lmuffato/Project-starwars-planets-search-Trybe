import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function FilterByText() {
  const [searchText, setSearchText] = useState('');
  const { filters, setFilters } = useContext(MyContext);

  const hundleChange = ({ target }) => {
    setSearchText(target.value);
    setFilters({
      ...filters,
      filteredByName: {
        name: target.value,
      },
    });
  };

  return (
    <section>
      <input
        id="input-text"
        data-testid="name-filter"
        type="text"
        placeholder="Search"
        value={ searchText }
        onChange={ hundleChange }
      />
      <button type="button">Search</button>
    </section>
  );
}

export default FilterByText;
