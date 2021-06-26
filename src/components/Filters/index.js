import React, { useContext } from 'react';
import AppContext from '../../context/context';

function Filters() {
  const { setFilters } = useContext(AppContext);

  function filterName({ value }) {
    setFilters({
      filterByName: {
        name: value,
      },
    });
  }

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="nome"
      onChange={ ({ target }) => filterName(target) }
    />
  );
}

export default Filters;
