import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Filters() {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const handleClick = (filter) => {
    const newFilters = filterByNumericValues.filter((item) => item !== filter);
    console.log('newFilters', newFilters);
    console.log('filterByNumericValues', filterByNumericValues);
    if (filterByNumericValues.length === 1) {
      setFilters({
        ...filters,
        filterByNumericValues: [
          {
            column: '',
            comparison: '',
            value: '',
          },
        ],
      });
    } else {
      setFilters({
        ...filters,
        filterByNumericValues: newFilters,
      });
    }
  };

  return (
    <div>
      <h2>Filtros</h2>
      {filterByNumericValues[0].column === '' ? <div><p>Sem filtros selecionados</p></div>
        : filterByNumericValues.map((filter, index) => (
          <div
            key={ index }
            data-testid="filter"
          >
            <p>{filter.column}</p>
            <p>{filter.comparison}</p>
            <p>{filter.value}</p>
            <button type="button" onClick={ () => handleClick(filter) }>X</button>
          </div>
        ))}
    </div>
  );
}
