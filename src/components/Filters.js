import React, { useContext } from 'react';
import PlanestContext from '../context/PlanetsContext';

function Filters() {
    const context = useContext(PlanestContext);
    const { filters, setFilterByName } = context;
    const { name } = filters.filterByName;
    return (
      <input
        type="text"
        data-testid="name-filter"
        onChange={ setFilterByName }
        value={ name }
      />
    );
  }
  
  export default Filters;
  