import React, { useContext } from 'react';
import contextStarWars from '../context/Context';

function Filters() {
  const { setName } = useContext(contextStarWars);
  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ ({ target }) => setName(target.value) }
      />
    </form>
  );
}

export default Filters;
