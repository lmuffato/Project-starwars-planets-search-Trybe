import React, { useContext } from 'react';
import context from '../context/context';

function Filter() {
  const { filter, setFilter } = useContext(context);

  const handleFilter = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filters: {
        ...filter.filters, filterByName: { name: value },
      },
    });
  };

  const renderFilter = () => {
    return (
      <label htmlFor="filter">
        Filter:
          <input
            id="filter"
            type="text"
            data-testid='name-filter'
            onChange={ handleFilter }
          />
      </label>
    );
  }

  return (
    <div>
      { renderFilter() }
    </div>
  );
}

export default Filter;
