import React, { useContext } from 'react';
import Context from '../context/Context';
// Requisito 02 realizado com ajuda de Luan Ramalho turma 10a

function Input() {
  const { setInputValue } = useContext(Context);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setInputValue({ filterByName: { name: e.target.value } }) }
      />
    </div>
  );
}

export default Input;
