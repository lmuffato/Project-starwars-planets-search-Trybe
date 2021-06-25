import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';

function Filters() {
  const { setFilters } = useContext(StarwarsContext);

  return (
    <div>
      <label htmlFor="name-filter">
        Nome do Planeta:
        <input
          id="name-filter"
          type="text"
          data-testid="name-filter"
          onChange={ (e) => setFilters({
            filterByName: {
              name: e.target.value,
            },
            filterByNumericValues: [],
          }) }
        />
      </label>
    </div>
  );
}

export default Filters;
