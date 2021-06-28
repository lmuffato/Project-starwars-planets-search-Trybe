import React, { useContext } from 'react';
import Context from '../context/Context';
// Requisito 02 realizado com ajuda de Luan Ramalho turma 10a

function Input() {
  const { handlePlanetFiltered } = useContext(Context);

  return (
    <label htmlFor="name-filter">
      <input
        type="text"
        placeholder="Search for a Planet"
        id="name-filter"
        data-testid="name-filter"
        onChange={ (e) => handlePlanetFiltered(e) }
      />
    </label>
  );
}

export default Input;
