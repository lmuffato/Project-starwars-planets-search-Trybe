import React, { useContext } from 'react';
import PlanetsContext from '../../contexts/PlanetsContext';

function FilterForm() {
  const { handleChange, numericFilter, handleNumericChange } = useContext(PlanetsContext);

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        numericFilter();
      } }
    >
      <label htmlFor="name-filter">
        Buscar
        <input
          onChange={ handleChange }
          data-testid="name-filter"
          id="name-filter"
          type="text"
          placeholder="Busque aqui"
        />
      </label>
      <label htmlFor="column-filter">
        Coluna
        <select
          id="column-filter"
          data-testid="column-filter"
          name="column"
          onChange={ handleNumericChange }
          required
        >
          <option id="population" value="population">population</option>
          <option id="orbital_period" value="orbital_period">orbital_period</option>
          <option id="diameter" value="diameter">diameter</option>
          <option id="rotation_period" value="rotation_period">rotation_period</option>
          <option id="surface_water" value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Comparação
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleNumericChange }
          required
        >
          {/* <option selected="true" value="" disabled>Selecione...</option> */}
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor
        <input
          data-testid="value-filter"
          id="value-filter"
          type="number"
          name="value"
          onChange={ handleNumericChange }
          required
        />
      </label>
      <button type="submit" data-testid="button-filter">
        Filtrar
      </button>
    </form>
  );
}

export default FilterForm;
