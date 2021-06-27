import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';
import './Header.css';

function Header() {
  const {
    setFilters, filters, optionFilter, setOptionFilter } = useContext(StarWarsContext);

  const handleFilterChange = ({ target }) => {
    setOptionFilter({
      ...optionFilter,
      [target.name]: target.value,
    });
  };

  const handleChange = ({ target }) => setFilters({
    ...filters,
    filterByName: {
      name: target.value,
    },
  });

  const handleClick = () => {
    const { filterByNumericValues } = filters;
    if (filterByNumericValues.length === 1 && filterByNumericValues[0].column === '') {
      setFilters({
        ...filters,
        filterByNumericValues: [
          {
            column: optionFilter.columnFilter,
            comparison: optionFilter.comparisonFilter,
            value: optionFilter.valueFilter,
          },
        ],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: [
          ...filterByNumericValues.concat(
            {
              column: optionFilter.columnFilter,
              comparison: optionFilter.comparisonFilter,
              value: optionFilter.valueFilter,
            },
          ),
        ],
      });
    }
  };

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
