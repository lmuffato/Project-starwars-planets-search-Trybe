import React, { useContext } from 'react';
import PlanetsContext from '../utils/PlanetsContext';

function NameFilter() {
  const { planetFilter, setPlanetFilter } = useContext(PlanetsContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Pesquise pelo nome"
        value={ planetFilter.filters.filterByName.name }
        onChange={ ({ target: { value } }) => setPlanetFilter(
          { filters: { ...planetFilter.filters, filterByName: { name: value } } },
        ) }
      />
    </div>
  );
}

export default NameFilter;
