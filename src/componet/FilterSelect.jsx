import React, { useState, useContext } from 'react';
import Context from '../context/Context';

function FilterSelect() {
  const { handleSetValueToFilter } = useContext(Context);
  const [population, setPopulation] = useState(
    <option value="population">population</option>,
  );
  const [orbitalPeriod, setorbitalPeriod] = useState(
    <option value="orbital_period">orbital_period</option>,
  );
  const [diameter, setdiameter] = useState(
    <option value="diameter">diameter</option>,
  );
  const [rotationPeriod, setrotationPeriod] = useState(
    <option value="rotation_period">rotation_period</option>,
  );
  const [surfaceWater, setsurfaceWater] = useState(
    <option value="surface_water">surface_water</option>,
  );
  const [comlumFilter, setComlumFilter] = useState('');
  const [comparisonFilter, setcomparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState('');

  const handleExcludeElement = (param) => {
    if (param === 'population') setPopulation('');
    if (param === 'orbital_period') setorbitalPeriod('');
    if (param === 'diameter') setdiameter('');
    if (param === 'rotation_period') setrotationPeriod('');
    if (param === 'surface_water') setsurfaceWater('');
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleExcludeElement(
      document.getElementById('colum-filter').value,
    );
    handleSetValueToFilter(comlumFilter, comparisonFilter, valueFilter);
  };

  return (
    <div>
      <select
        name="comlumFilter"
        id="colum-filter"
        data-testid="column-filter"
        onChange={ ({ target }) => setComlumFilter(target.value) }
      >
        {population}
        {orbitalPeriod}
        {diameter}
        {rotationPeriod}
        {surfaceWater}
      </select>
      <select
        name="comparisonFilter"
        id="comparison-filter"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setcomparisonFilter(target.value) }

      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="value-filter">
        <input
          name="valueFilter"
          id="value-filter"
          type="text"
          data-testid="value-filter"
          onChange={ ({ target }) => setValueFilter(target.value) }

        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filter
      </button>
    </div>
  );
}

export default FilterSelect;
