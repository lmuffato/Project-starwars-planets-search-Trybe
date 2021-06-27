import React, { useContext } from 'react';
import planetsContext from '../contexts/planetsContext';

function SearchInput() {
  const { setPlanetInput } = useContext(planetsContext);
  return (
    <div>
      <label htmlFor="name-filter">
        Type your Planet
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (e) => setPlanetInput({ filterByName: { name: e.target.value } }) }
        />
      </label>
    </div>
  );
}

export default SearchInput;
