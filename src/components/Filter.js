import React, { useContext } from 'react';
import Context from '../context/Context';

function Filter() {
  const { setName } = useContext(Context);
  return (
    <form>
      <input
        data-testid="name-filter"
        onChange={ ({ target }) => setName(target.value) }
      />
    </form>
  );
}

export default Filter;
