import React, { useContext, useState } from 'react';
import ContextApi from './ContextApi';

function DropDownFilters() {
  const { filterByNumericValues, setfilterByNumericValues } = useContext(ContextApi);
  const [filter, setfilter] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    setfilter({
      ...filter,
      [name]: value,
    });
  };

  const handleClick = () => {
    setfilterByNumericValues([
      ...filterByNumericValues,
      filter,
    ]);
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        <option>select</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option>select</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="value"
        data-testid="value-filter"
        type="number"
        onChange={ handleChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Add Filters
      </button>
    </form>
  );
}

export default DropDownFilters;
