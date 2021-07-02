import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputText() {
  const { getNames, setGetNames } = useContext(StarWarsContext);

  return (
    <label htmlFor="searchPlanet">
      Digite o nome do planeta:
      <input
        id="searchPlanet"
        type="text"
        data-testid="name-filter"
        value={ getNames }
        onChange={ (e) => setGetNames(e.target.value) }
      />
    </label>
  );
}

export default InputText;
