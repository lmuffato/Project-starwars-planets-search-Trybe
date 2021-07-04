// reformulação do filtro feita com ajuda do repositório da Nathália Zebral
// https://github.com/tryber/sd-010-a-project-starwars-planets-search/pull/73
import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function FilterByName() {
  const { name, settingSearchedName } = useContext(StarContext);

  return (
    <form>
      <label htmlFor="name">
        Pesquisa pelo Nome:
        <input
          type="text"
          data-testid="name-filter"
          value={ name }
          onChange={ ({ target: { value } }) => settingSearchedName(value) }
        />
      </label>
      {/* <button type="button" data-testid="filter"> X </button> */}
    </form>
  );
}

export default FilterByName;
