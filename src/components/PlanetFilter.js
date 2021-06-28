import React, { useContext } from 'react';
import AppContext from '../context/Context';

function PlanetFilter() {
  const { name, toSetSearch } = useContext(AppContext);
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
            onChange={ (e) => toSetSearch(e.target.value) }
          />
        </label>
      </form>
    </div>
  );
}

export default PlanetFilter;
