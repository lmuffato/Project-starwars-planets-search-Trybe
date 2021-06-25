import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Search() {
  const { planetsData, setName } = useContext(StarWarsContext);
  const { filters } = planetsData;
  const { name } = filters.filterByName;
  return (
    <div>
      <label htmlFor="name">
        Busca por nome do Planeta
        <input
          data-testid="name-filter"
          id="name"
          type="text"
          value={ name }
          onChange={ (ev) => setName(ev.target.value) }
        />
      </label>
    </div>

  );
}

export default Search;
