import React, { useContext } from 'react';
import SWContext from '../services/SWContext';

export const SortTable = () => {
  const {
    handleSortClick,
    setSortFilter,
    sortFilter,
    sortOption
  } = useContext(SWContext);

  const handleSortChange = (name, value) => {
    setSortFilter({ ...sortFilter, [name]: value });
  };

  const sortColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <div key={sortOption}>
      <select
        name="column"
        data-testid="column-sort"
        onChange={({ target: { name, value } }) => handleSortChange(name, value)}
      >
        {sortColumns.map((item) => <option key={item}>{item}</option>)}
      </select>
      <label htmlFor="radio">
        Crescente
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          name="sort"
          onChange={({ target: { name, value } }) => handleSortChange(name, value)}
        />
      </label>
      <label htmlFor="radio">
        Decrescente
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          name="sort"
          onChange={({ target: { name, value } }) => handleSortChange(name, value)}
        />
      </label>
      <button
        type="button"
        onClick={handleSortClick}
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </div>
  );
};
