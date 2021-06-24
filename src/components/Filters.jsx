import React, { useContext } from 'react';
import ContextPlanets from '../context/Context';

function Filters() {
  const { setName, filters } = useContext(ContextPlanets);

  return (
    <div>
      <label htmlFor="inputName">
        <input
          data-testid="name-filter"
          value={ filters.filterByName.name }
          id="inputName"
          onChange={ (event) => setName(event.target.value) }
        />
      </label>
    </div>
  );
}

export default Filters;
