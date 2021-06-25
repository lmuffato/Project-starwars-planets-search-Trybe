import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const [nameInput, setNameInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [categories, setCategories] = useState('population');
  const [comparation, setComparation] = useState('maior que');
  const { filters, setFilters } = useContext(PlanetContext);

  const handleChange = (event) => {
    const { value, id } = event.target;

    switch (id) {
    case 'name': {
      setNameInput(value);
      setFilters({ ...filters, name: value });

      break;
    }
    case 'number': {
      setNumberInput(value);

      // if (value === '') setFilters({ name: nameInput });
      // else {
      //   setFilters({ ...filters, [categories]: `${comparation}${value}` });
      // }
      break;
    }
    case 'categories': {
      setCategories(value);

      // if (numberInput !== '') {
      //   setFilters({ name: nameInput, [value]: `${comparation}${numberInput}` });
      // }
      break;
    }
    case 'comparation': {
      setComparation(value);

      // if (numberInput !== '') {
      //   setFilters({ name: nameInput, [categories]: `${value}${numberInput}` });
      // }
      break;
    }
    default:
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (numberInput !== '') {
      let comparator = '';

      switch (comparation) {
      case 'maior que':
        comparator = '>';
        break;
      case 'menor que':
        comparator = '<';
        break;
      default: comparator = '=';
      }
      setFilters({ name: nameInput, [categories]: `${comparator}${numberInput}` });
    } else setFilters({ name: numberInput });
  };

  return (
    <header>
      <form>
        <input
          id="name"
          type="text"
          data-testid="name-filter"
          placeholder="Filter by name"
          value={ nameInput }
          onChange={ handleChange }
        />
        <select
          id="categories"
          data-testid="column-filter"
          value={ categories }
          onChange={ handleChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          id="comparation"
          data-testid="comparison-filter"
          value={ comparation }
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          id="number"
          type="number"
          data-testid="value-filter"
          value={ numberInput }
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
    </header>
  );
}

export default Header;
