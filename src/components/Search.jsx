import React, { useContext } from 'react';
import Context from '../context/Context';

function Search() {
  const { setFilters, filters: { filterByName: { name: nome } } } = useContext(Context);

  const getName = (name) => {
    setFilters({
      filterByName: {
        name,
      },
    });
  };

  return (
    <header>
      <section>
        <input
          data-testid="name-filter"
          type="text"
          value={ nome }
          onChange={ (e) => getName(e.target.value) }
        />
      </section>
    </header>
  );
}

export default Search;
