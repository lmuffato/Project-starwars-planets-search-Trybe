import React, { useContext } from 'react';
import Context from '../context/Context';

function Input() {
  const { filters: { filterByName: { setName } } } = useContext(Context);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search for a planet"
        onChange={ (e) => setName(e.target.value) }
      />
    </div>
  );
}

export default Input;
