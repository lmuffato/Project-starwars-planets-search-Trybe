// reformulação do filtro feita com ajuda do repositório da Nathália Zebral
// https://github.com/tryber/sd-010-a-project-starwars-planets-search/pull/73
import React from 'react';
import StarContext from '../context/StarContext';

function Filter() {
  const { name, settingSearchedName } = useContext(StarContext);

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target: { value } }) => settingSearchedName(value) }
      />
      {/* <button type="button" data-testid="filter"> X </button>
      <select data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <button type="button" data-testid="filter"> X </button>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <button type="button" data-testid="filter"> X </button>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ "teste" }
      />
      <button type="button" data-testid="filter"> X </button> */}
    </form>
  );
}

export default Filter;
