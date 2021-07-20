import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filtros() {
  const { filters, setFilters } = useContext(PlanetsContext);
  return (
    <input
      type="text"
      value={ filters.filterByName.name }
      data-testid="name-filter"
      onChange={ (e) => setFilters(
        { ...filters, filterByName: { name: e.target.value } },
      ) }
    />
  );
}

export default Filtros;
