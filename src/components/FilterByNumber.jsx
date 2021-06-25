import React, { useState } from 'react';
import usePlanets from '../hooks/usePlanets';

function FilterByNumber() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('>');
  const [inputFilter, setInputFilter] = useState(0);

  const {
    filters: { filters, setFilters },
    data: { planetasIniciais, setPlanets },
  } = usePlanets();

  function filterByNumericValues() {
    const filteredPlanets = planetasIniciais.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return planet[columnFilter] > Number(inputFilter);
      }
      if (comparisonFilter === 'menor que') {
        return planet[columnFilter] < Number(inputFilter);
      }
      return planet[columnFilter] === inputFilter;
    });
    setPlanets(filteredPlanets);
    setFilters({ ...filters,
      filterByNumbers:
      [{ columnFilter, comparisonFilter, inputFilter }],
    });
  }

  return (
    <div>
      <select
        onChange={ ({ target }) => setColumnFilter(target.value) }
        data-testid="column-filter"
        value={ columnFilter }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        onChange={ ({ target }) => setComparisonFilter(target.value) }
        data-testid="comparison-filter"
        value={ comparisonFilter }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        onChange={ ({ target }) => setInputFilter(target.value) }
        data-testid="value-filter"
        type="number"
        value={ inputFilter }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterByNumericValues }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
