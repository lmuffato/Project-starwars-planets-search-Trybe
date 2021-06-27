import React from 'react';
// import planetsContext from '../contexts/planetsContext';

function Comparefilter() {
  return (
    <div>
      <select name="comparison" data-testid="comparison-filter">
        <option value="">maior que</option>
        <option value="">menor que</option>
        <option value="">igual a</option>
      </select>
    </div>
  );
}

export default Comparefilter;
