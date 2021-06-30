// requisito feito com ajuda do colega Nilson Ribeiro.
import React, { useContext } from 'react';
import ContextApi from './ContextApi';

function InputSearchByName() {
  const { name, setSearchedName } = useContext(ContextApi);
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
            onChange={ ({ target: { value } }) => setSearchedName(value) }
          />
        </label>
      </form>
    </div>
  );
}

export default InputSearchByName;
