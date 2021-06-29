import React, { useContext } from 'react';
import planetsContext from '../contexts/planetsContext';

function Comparefilter() {
  const { handleSelectChange } = useContext(planetsContext);
  return (
    <div>
      <select
        name="columnFilter"
        id="column-filter"
        data-testid="comparison-filter"
        onChange={ handleSelectChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
    </div>
  );
}

export default Comparefilter;
