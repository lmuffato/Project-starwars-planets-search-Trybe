import React, { useContext } from 'react';
import AppContext from '../context/Context';

function PlanetFilter() {
  const { name, setSearchedName } = useContext(AppContext);
  return (
    <div>
      <form>
        <label htmlFor="searchBar">
          Search a Planet:
          <input
            type="text"
            id="searchBar"
            data-testid="name-filter"
            value={ name }
            onChange={ ({ target: { value } }) => setSearchedName(value) }
          />
        </label>
      </form>
    </div>
  );
}

export default PlanetFilter;
