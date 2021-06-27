import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const FilterBar = () => {
  const { setFilters } = useContext(AppContext);

  const filterByName = ({ value }) => {
    setFilters({
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="nome"
      onChange={ ({ target }) => filterByName(target) }
    />

  );
};

export default FilterBar;
