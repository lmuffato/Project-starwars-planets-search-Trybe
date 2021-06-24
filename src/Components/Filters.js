import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filters() {
  const { handleSearchName, searchName } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="Name">
        Name:
        <input
          data-testid="name-filter"
          type="text"
          value={ searchName }
          onChange={ handleSearchName }
        />
      </label>
      <select data-testid="column-filter">
        <option> population </option>
        <option> orbital_period </option>
        <option> diameter </option>
        <option> rotation_period </option>
        <option> surface_water </option>
      </select>
      <select data-testid="comparison-filter">
        <option> maior que </option>
        <option> menor que </option>
        <option> igual a </option>
      </select>
      <input type="number" data-testid="value-filter" />
      <button type="button" data-testid="button-filter" label="filter">
        Filtrar
      </button>
    </div>

  );
}
export default Filters;
