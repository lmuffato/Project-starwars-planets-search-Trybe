import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputText() {
  const { getByName } = useContext(StarWarsContext);

  return (
    <label htmlFor="searchPlanet">
      Digite o nome do planeta:
      <input
        id="searchPlanet"
        type="text"
        data-testid="name-filter"
        onChange={ getByName }
      />
    </label>
  );
}

export default InputText;
