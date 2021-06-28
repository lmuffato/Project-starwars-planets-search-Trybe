import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function MakeNumericFilter() {
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [value, setValue] = useState('0');
  const { filterName, setFilterName } = useContext(PlanetsContext);
  const optionColumn = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [optionValues, setOptionValues] = useState(optionColumn);

  const filterClick = () => {
    setFilterName(filterName.filter((filtered) => {
      if (comparisonFilter === 'maior que') {
        return Number(filtered[columnFilter]) > Number(value);
      }
      if (comparisonFilter === 'menor que') {
        return Number(filtered[columnFilter]) < Number(value);
      }
      return filtered[columnFilter] === value;
    }));
    setOptionValues(optionValues.filter((opVal) => opVal !== columnFilter));
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        {optionValues.map((opValue, key) => (
          <option key={ key } value={ opValue }>{opValue}</option>))}
        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ (e) => setComparisonFilter(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => filterClick() }
      >
        Acionar Filtro
      </button>

    </div>
  );
}

export default MakeNumericFilter;
