import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';

export default function FilterByName() {
  const { handleChangeName } = useContext(MainContext);
  return (
    <label htmlFor="input-text">
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => handleChangeName(event) }
      />
    </label>
  );
}
