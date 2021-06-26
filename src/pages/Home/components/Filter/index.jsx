import React, { useContext, useState } from 'react';

import Context from '../../../../context/Context';

function Filter() {
  const { setFilters } = useContext(Context);
  const [name, setName] = useState('');

  const handleInput = ({ target: { value } }, setNewState) => {
    setNewState(value);
    setFilters(({ filters: prev }) => ({
      filters: {
        ...prev,
        filterByName: { name: value },
      },
    }));
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="findByName"
        value={ name }
        onChange={ (event) => handleInput(event, setName) }
      />
    </div>
  );
}

export default Filter;
