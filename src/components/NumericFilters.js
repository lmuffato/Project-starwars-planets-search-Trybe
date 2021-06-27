import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumericFilters() {
  const { getNumericFilters } = useContext(StarWarsContext);
  const [columFilter, setColumFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    getNumericFilters(columFilter, comparisonFilter, valueFilter, true);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    switch (name) {
    case 'columFilter':
      setColumFilter(value);
      break;
    case 'comparisonFilter':
      setComparisonFilter(value);
      break;
    case 'valueFilter':
      setValueFilter(value);
      break;
    default:
    }
  }
  return (
    <div>
      <select data-testid="column-filter" onChange={ handleChange } name="columFilter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChange }
        name="comparisonFilter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
        name="valueFilter"
      />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="button-filter"
      >
        {' '}
        Adicionar Filtro
      </button>
    </div>
  );
}

export default NumericFilters;
