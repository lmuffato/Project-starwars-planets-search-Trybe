import React, { useCallback } from 'react';
import Button from '../Generics/Button';
import useStarWars from '../../hooks/useStarWars';

function ActiveFilters() {
  // const [activeFilter, setActiveFilter] = useState(false);
  // const [filtrosAtivos, setFiltrosAtivos] = useState([]);

  const {
    filterByNumericValues,
    setFiltersByNumericValue,
    setSoughtPlanets,
    data,
  } = useStarWars();

  const tryFilter = useCallback((filtered) => {
    setFiltersByNumericValue(filtered);
  }, [setFiltersByNumericValue]);

  const handleRemoveFilter = useCallback((event, id) => {
    event.preventDefault();
    console.log(id);
    if (filterByNumericValues.length > 0) {
      const filtered = filterByNumericValues
        .map((item, indice) => item[indice] !== id);
      // setFiltersByNumericValue(filtered);
      tryFilter(filtered);
      setSoughtPlanets(data);
    }
    // setActiveFilter(false);
  }, [data, filterByNumericValues, setSoughtPlanets, tryFilter]);

  return (
    <div>
      { filterByNumericValues
      && filterByNumericValues.map((filtro, index) => (
        <div key={ index } data-testid="filter" id={ filtro }>
          <span>
            {`${filtro.filterColumn}
            ${filtro.filterComparisonType}
            ${filtro.filterValue}`}
          </span>
          <Button onClick={ (event) => handleRemoveFilter(event) }>X</Button>
        </div>
      ))}
    </div>);
}

export default ActiveFilters;
