import React, { useContext } from 'react';
import planetsContext from '../contexts/planetsContext';

function SearchInput() {
  const { handlePlanetFiltered } = useContext(planetsContext);
  return (
    <div>
      <label htmlFor="name-filter">
        Type your Planet
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ handlePlanetFiltered }
        />
      </label>
    </div>
  );
}

export default SearchInput;
