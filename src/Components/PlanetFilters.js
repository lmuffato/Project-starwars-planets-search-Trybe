// requisito feito com ajuda do colega Nilson Ribeiro.
import React, { useContext } from 'react';
import ContextApi from './ContextApi';

function PlanetFilters() {
  const { name, toSetSearchedName } = useContext(ContextApi);
  return (
    <div>
      <form>
        <label htmlFor="searchBar">
          Search a Planet:
          <input
            data-testid="name-filter"
            type="text"
            id="searchBar"
            value={ name }
            onChange={ ({ target: { value } }) => toSetSearchedName(value) }
          />
        </label>
      </form>
    </div>
  );
}

export default PlanetFilters;
