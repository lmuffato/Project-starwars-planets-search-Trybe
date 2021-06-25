import React, { useState } from 'react';
import usePlanets from '../hooks/usePlanets';

function FilterByNumber() {
  const categories = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [inputFilter, setInputFilter] = useState(0);
  const [dropdown, setDropdown] = useState(categories);
  const [columnFilter, setColumnFilter] = useState(dropdown[0]);

  const {
    filters: { filters, setFilters },
    data: { planetsList, setPlanets },
  } = usePlanets();

  function filterByNumericValues() {
    const filteredPlanets = planetsList.filter((planet) => {
      if (comparisonFilter === 'maior que') {
        return planet[columnFilter] > Number(inputFilter);
      }
      if (comparisonFilter === 'menor que') {
        return planet[columnFilter] < Number(inputFilter);
      }
      return planet[columnFilter] === inputFilter;
    });
    setPlanets(filteredPlanets);
    if (!filters.filterByNumbers) {
      setFilters({ ...filters,
        filterByNumbers:
        [{ columnFilter, comparisonFilter, inputFilter }],
      });
    } else {
      setFilters({ ...filters,
        filterByNumbers:
        [...filters.filterByNumbers, { columnFilter, comparisonFilter, inputFilter }],
      });
    }
    const newCategories = dropdown.reduce((acc, curr) => {
      if (curr === columnFilter) {
        return acc;
      }
      return [...acc, curr];
    }, []);
    setDropdown(newCategories);
    setComparisonFilter('maior que');
    setInputFilter(0);
    setColumnFilter(newCategories[0]);
  }

  return (
    <div>
      <select
        onChange={ ({ target }) => setColumnFilter(target.value) }
        data-testid="column-filter"
        value={ columnFilter }
      >
        { dropdown.map((category) => (
          <option key={ category } value={ category }>{category}</option>)) }
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
