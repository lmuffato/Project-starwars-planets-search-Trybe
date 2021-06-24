import React from 'react';
import useStarWars from '../../hooks/useStarWars';

function FilterByName() {
  const { filter, setFilter } = useStarWars();

  const filterByName = ({ target }) => {
    const newFilter = {
      ...filter,
      filterByName: { ...filter.filterByName, name: target.value },
    };
    setFilter(newFilter);
  };

  return <input data-testid="name-filter" onChange={ (e) => filterByName(e) } />;
}

export default FilterByName;
