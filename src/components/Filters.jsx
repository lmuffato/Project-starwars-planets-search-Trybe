import React, { useContext } from 'react';
import PlanetsContext from '../utils/PlanetsContext';

function Filters() {
  const { nameFilter, setNameFilter } = useContext(PlanetsContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Pesquise pelo nome"
        value={ nameFilter.filters.filterByName.name }
        onChange={ ({ target: { value } }) => setNameFilter((filters) => (
          { ...filters, filters: { filterByName: { name: value } } })) }
      />
    </div>
  );
}

export default Filters;
