import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { setNameFilter } = useContext(PlanetsContext);
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    setNameFilter(nameInput);
  }, [nameInput]);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ nameInput }
        onChange={ ({ target }) => setNameInput(target.value) }
      />
    </div>
  );
}

export default Filters;
