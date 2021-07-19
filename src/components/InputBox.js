import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/input.css';

function InputBox() {
  const {
    filters: { filterByName: { name } },
    function: { handleName },
  } = useContext(StarWarsContext);

  return (
    <label htmlFor="name-input">
      Filtrar por nome:
      <input
        id="name-input"
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleName }
      />
    </label>
  );
}

export default InputBox;
