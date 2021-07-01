import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumFiltersUtilizeds() {
  const { deletNumericFilter } = useContext(StarWarsContext);
  const { filterByNumericValues } = useContext(StarWarsContext);
  const renderUtilezedsFilters = filterByNumericValues.map((filter, index) => {
    const { column, comparison, value } = filter;
    const position = `Filtro ${index + 1}`;
    const fColumn = `column: ${column}`;
    const fComparison = `comparison: ${comparison}`;
    const fValue = `value: ${value}`;
    return (
      <div key={ column }>
        <span>
          {`${position} { ${fColumn}, ${fComparison}, ${fValue}}`}
          <button
            type="button"
            data-testid="filter"
            name={ column }
            onClick={ ({ target }) => deletNumericFilter(target.name, index) }
          >
            X
          </button>
        </span>
      </div>
    );
  });
  return renderUtilezedsFilters.length > 0 ? renderUtilezedsFilters : '';
}

export default NumFiltersUtilizeds;
