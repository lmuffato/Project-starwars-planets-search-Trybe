import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Filters() {
  const { setFilters, filters } = useContext(StarwarsContext);

  return (
    <div>
      <label htmlFor="name-filter">
        Nome do Planeta:
        <input
          id="name-filter"
          type="text"
          data-testid="name-filter"
          onChange={ (e) => setFilters({
            ...filters,
            filterByName: { name: e.target.value },
          }) }
        />
      </label>
    </div>
  );
}

// onChange={ (e) => setFilters({
//   filterByName: {
//     name: e.target.value,
//   },
//   filterByNumericValues: [],
// }) }

export default Filters;
