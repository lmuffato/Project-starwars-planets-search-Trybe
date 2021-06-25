import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function MakeFilter() {
  const { data, setFilterName, search, setSearch } = useContext(PlanetsContext);

  useEffect(() => {
    setFilterName(
      data.filter((planet) => planet.name.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, data]);

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ (e) => setSearch(e.target.value) }
    />
  );
}

export default MakeFilter;
