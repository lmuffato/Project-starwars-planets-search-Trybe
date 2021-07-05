import React, { useContext, useState } from 'react';
import AppContext from '../context/Context';

function NumbersFilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(AppContext);
  const [filter, setFilter] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleClick = () => {
    setFilterByNumericValues([
      ...filterByNumericValues,
      filter,
    ]);
  };

  return (
    <form>
      <select
        name="column"
        data-testid="column-filter"
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
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option>select</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        name="value"
        data-testid="value-filter"
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

export default NumbersFilters;
