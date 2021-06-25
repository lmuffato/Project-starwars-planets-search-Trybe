import React from 'react';
import usePlanets from '../hooks/usePlanets';

function FilterName() {
  const {
    filters: { filters, setFilters },
    data: { planetasIniciais, setPlanets },
  } = usePlanets();

  function filterByName(text) {
    const filteredPlanets = planetasIniciais
      .filter((planet) => planet.name.includes(text));
    setPlanets(filteredPlanets);
    setFilters({ ...filters, filterByName: { name: text } });
  }

  return (
    <input
      onChange={ ({ target }) => filterByName(target.value) }
      type="text"
      data-testid="name-filter"
    />
  );
}

export default FilterName;
