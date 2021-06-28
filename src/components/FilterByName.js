import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { name, setName } = useContext(planetsContext);

  return (
    <label htmlFor="name">
      Name
      <input
        id="name"
        value={ name }
        data-testid="name-filter"
        onChange={ (e) => setName(e.target.value) }
      />
    </label>
  );
}

export default FilterByName;
