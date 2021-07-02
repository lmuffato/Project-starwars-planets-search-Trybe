import React, { useContext } from 'react';
import { string, number, func } from 'prop-types';
import { PlanetsContext } from '../Context/PlanetContext';

const NumericFilters = ({
  column,
  comparison,
  comparisonValue,
  setColumn,
  setComparison,
  setComparisonValue,
  handleFilterClick,
}) => {
  const { filters } = useContext(PlanetsContext);
  const columns = filters.filterByNumericValues
    .map(({ column: filterColumn }) => filterColumn);

  return (
    <form onSubmit={ handleFilterClick }>
      <select
        name="colum-filter"
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {!columns.includes('population')
          && <option value="population">population</option>}

        { !columns.includes('orbital_period')
          && <option value="orbital_period">orbital_period</option>}

        {!columns.includes('diameter')
          && <option value="diameter">diameter</option>}

        {!columns.includes('rotation_period')
          && <option value="rotation_period">rotation_period</option>}

        {!columns.includes('surface_water')
          && <option value="surface_water">surface_water</option>}

      </select>

      <select
        name="comparison-filter"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        placeholder="Digite um valor"
        value={ comparisonValue }
        onChange={ ({ target }) => setComparisonValue(target.value) }
      />

      <button
        type="submit"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
};

NumericFilters.propTypes = {
  column: string,
  comparison: string,
  comparisonValue: number,
  setColumn: func,
  setComparison: func,
  setComparisonValue: func,
  handleFilterClick: func,
}.isRequired;

export default NumericFilters;
