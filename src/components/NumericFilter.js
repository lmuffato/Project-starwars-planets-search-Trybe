import React, { useContext, useState } from 'react';
import starwarsContext from '../context/starwarsContext';

export default function NumericFilter() {
  const [filtersInputs, setFiltersInput] = useState({
    columnInput: 'population',
    comparisonInput: 'maior que',
    valueInput: 0,
  });
  const { filters, setFilters } = useContext(starwarsContext);
  const { filterByNumericValues: { column, comparison, value } } = filters;

  const handleChange = ({ target }) => {
    setFiltersInput({ ...filtersInputs, [target.name]: target.value });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column: filtersInputs.columnInput,
          comparison: filtersInputs.comparisonInput,
          value: filtersInputs.valueInput,
        },
      ],
    });
  };

  return (
    <div>
      <label htmlFor="column-filter">
        Parâmetro:
        <select
          data-testid="column-filter"
          id="column-filter"
          name="columnInput"
          value={ column }
          onChange={ (e) => handleChange(e) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Comparação:
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparisonInput"
          value={ comparison }
          onChange={ (e) => handleChange(e) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          name="valueInput"
          value={ value }
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Acionar filtro
      </button>
    </div>
  );
}
