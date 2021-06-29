import React, { useContext } from 'react';
import planetsContext from '../contexts/planetsContext';

function Numberfilter() {
  const { handleSelectChange } = useContext(planetsContext);
  return (
    <div>
      <input
        id="value-filter"
        type="number"
        name="valueFilter"
        data-testid="value-filter"
        onChange={ handleSelectChange }
      />
    </div>
  );
}

export default Numberfilter;
