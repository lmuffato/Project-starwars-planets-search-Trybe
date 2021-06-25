import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Inputs() {
  const { handleFilterChange } = useContext(Context);
  return (
    <form>
      <label htmlFor="name-filter">
        <input
          data-testid="name-filter"
          id="name-filter"
          type="text"
          placeholder="Nome do Planeta"
          onChange={ handleFilterChange }
        />
      </label>
    </form>
  );
}
