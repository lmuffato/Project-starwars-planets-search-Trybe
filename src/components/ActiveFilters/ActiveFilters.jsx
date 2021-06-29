import React, { useCallback } from 'react';
import Button from '../Generics/Button';
import useStarWars from '../../hooks/useStarWars';

function ActiveFilters() {
  const {
    filterByNumericValues,
    setFiltersByNumericValue,
    setSoughtPlanets,
    data,
  } = useStarWars();

  // Requisito 05
  const handleRemoveFilter = useCallback((event, id) => {
    event.preventDefault();
    // console.log(id);
    const filtered = filterByNumericValues
      .filter((item) => item !== id);
    setFiltersByNumericValue(filtered);
    setSoughtPlanets(data);
  }, [data, filterByNumericValues, setFiltersByNumericValue, setSoughtPlanets]);

  return (
    <div>
      { filterByNumericValues.length > 0
      && filterByNumericValues.map((filtro, index) => (
        <div key={ index } data-testid="filter">
          <span>
            {`${filtro.filterColumn}
                ${filtro.filterComparisonType}
                ${filtro.filterValue}`}
          </span>
          <Button onClick={ (event) => handleRemoveFilter(event, filtro) }>X</Button>
        </div>
      ))}
    </div>);
}

export default ActiveFilters;
