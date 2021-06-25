import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const FilterTable = () => {
  const {
    filterName,
    setFilterName,
    filterByNumericValues,
    setFilterByNumericValues } = useContext(PlanetsContext);

  const filterByName = ({ target }) => {
    const { value } = target;
    setFilterName({
      ...filterName,
      filterByName: {
        name: value,
      },
    });
  };

  const handleValue = () => {
    const columnFilter = document.getElementById('column-filter');
    const comparisonFilter = document.getElementById('comparison-filter');
    const valueFilter = document.getElementById('value-filter');

    setFilterByNumericValues([
      ...filterByNumericValues, {
        column: columnFilter.value,
        comparison: comparisonFilter.value,
        value: valueFilter.value,
      }]);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ filterByName }
        placeholder="Pesquise um planeta"
      />
      <label htmlFor="column-filter">
        <select id="column-filter" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select id="comparison-filter" data-testid="comparison-filter">
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input type="number" id="value-filter" data-testid="value-filter" />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleValue }
      >
        Filtrar
      </button>
    </div>
  );
};

export default FilterTable;
