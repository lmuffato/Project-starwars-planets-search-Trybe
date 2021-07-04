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
      <label htmlFor="column">
        Filtra Colunas:
        <select
          name="column"
          data-testid="column-filter"
          value={ handleChange }
        >
          <option>column</option>
          <option value="surface_water">surface_water</option>
          <option value="orbital_period">orbital_period</option>
          <option value="population">population</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          <option>comparison</option>
          <option value=">">maior que</option>
          <option value="<">menor que</option>
          <option value="===">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adiciona Filtro
      </button>
    </form>

  );
}

export default NumbersFilters;
