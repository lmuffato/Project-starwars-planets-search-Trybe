import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Filter() {
  const { filters, setFilters } = useContext(PlanetContext);

  const handleChange = (event) => {
    setFilters({ filterByName: { name: event.target.value } });
  };

  const activeFilters = () => (Object.keys(filters).length !== 0 ? (
    <div>
      <span>Active Filters</span>
      <p>{ `filters: { filterByName: { ${filters.filterByName.name} } }`}</p>
    </div>
  ) : <p>Nenhum filtro ativo!</p>
  );

  return (
    <div>
      <input type="text" data-testid="name-filter" onChange={ handleChange } />
      { activeFilters() }
    </div>
  );
}

export default Filter;
