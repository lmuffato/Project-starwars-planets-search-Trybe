// Requisito 2 - linha 8- Implementa input para filtragem por nome;

import React, { useContext } from 'react';
import Context from '../context/Context';

const Input = () => {
  const { handleinput } = useContext(Context);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (event) => handleinput(event) }
      />
    </div>
  );
};

export default Input;
