import React, { useContext } from 'react';
import Context from '../context/Context';

function NameInput() {
  const { name, setName } = useContext(Context);

  return (
    <input
      type="text"
      value={ name }
      onChange={ (e) => setName(e.target.value) }
      className="filter-input"
      data-testid="name-filter"
      placeholder="Filtre por Nome"
    />
  );
}

export default NameInput;
