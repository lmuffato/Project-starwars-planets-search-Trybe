import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

const FilterByNumericValue = () => {
  const { filters, setFilters } = useContext(MyContext);
  const [filterNumeric, setFilterNumeric] = useState([
    {
      column: '',
      comparison: '',
      value: 0,
    },
  ]);

  const hundleChange = ({ target }) => {
    setFilterNumeric([{
      ...filterNumeric[0],
      [target.name]: target.value,
    }]);
  };

  const hundleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: filterNumeric,
    });
  };

  const renderParametersDropdown = () => (
    <select name="column" data-testid="column-filter" onChange={ hundleChange }>
      <option value="" selected disabled hidden>Escolha um parâmetro</option>
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
  );

  const renderComparisonDropdown = () => (
    <select name="comparison" data-testid="comparison-filter" onChange={ hundleChange }>
      <option value="" selected disabled hidden>Escolha uma comparação</option>
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  );

  const renderInput = () => (
    <label htmlFor="input-value">
      Insira um valor:
      <input
        data-testid="value-filter"
        id="input-value"
        name="value"
        type="number"
        value={ filterNumeric[0].value }
        onChange={ hundleChange }
      />
    </label>
  );

  return (
    <section>
      {renderParametersDropdown()}
      {renderComparisonDropdown()}
      {renderInput()}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ hundleClick }
      >
        Filtrar
      </button>
    </section>
  );
};

export default FilterByNumericValue;
