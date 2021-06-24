import React, { useContext } from 'react';
import Context from '../context/Context';

function Filter() {
  const { name, searchName } = useContext(Context);

  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => searchName(target.value) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filter;
