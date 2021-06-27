import React, { useContext } from 'react';

import PlanetContext from '../context/PlanetsContext';

export default function ControlPanel() {
  const { filters, handleName } = useContext(PlanetContext);
  const { filterByName } = filters;
  const { name } = filterByName;
  return (
    <div>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            data-testid="name-filter"
            value={ name }
            onChange={ handleName }
          />
        </label>
      </form>
    </div>
  );
}
