import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';
import './Header.css';

function Header() {
  const {
    handleChange,
    handleFilterChange,
    handleClick,
  } = useContext(StarWarsContext);

  return (
    <form>
      <label htmlFor="name-filter">
        Nome:
        <input
          type="text"
          data-testid="name-filter"
          id="name-filter"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="column-filter">
        Filtrar:
        <select
          data-testid="column-filter"
          id="column-filter"
          name="columnFilter"
          onChange={ handleFilterChange }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparisonFilter"
        onChange={ handleFilterChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        id="value-filter"
        name="valueFilter"
        onChange={ handleFilterChange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </form>
  );
}

export default Header;
