import React, { useCallback, useState } from 'react';
import Button from '../Generics/Button';
import Select from '../Generics/Select';
import { columnSort } from '../../services/data';
import useStarWars from '../../hooks/useStarWars';

function SortFilters() {
  const [sortFilt, setSort] = useState('ASC');
  const [column, setColumn] = useState('name');
  const { apiPlanets, setSoughtPlanets, soughtPlanets } = useStarWars();

  const handleASCSorting = useCallback((firstVal, sndValue, columnFilt) => {
    const POSITIVE = 1;
    const NEGATIVE = -1;
    const ZERO = 0;
    if (Number(firstVal[column]) > Number(sndValue[columnFilt])) return POSITIVE;
    if (Number(firstVal[column]) < Number(sndValue[columnFilt])) return NEGATIVE;
    return ZERO;
  }, [column]);

  const handleDSCSorting = (firstVal, sndValue, columnFilt) => {
    const POSITIVE = 1;
    const NEGATIVE = -1;
    const ZERO = 0;
    if (Number(firstVal[columnFilt]) > Number(sndValue[columnFilt])) return NEGATIVE;
    if (Number(firstVal[columnFilt]) < Number(sndValue[columnFilt])) return POSITIVE;
    return ZERO;
  };
  const handleSortArr = useCallback((sorting, columnFilt) => {
    const columnToLowerCase = columnFilt.toLowerCase();
    switch (sorting) {
    case 'ASC':
      setSoughtPlanets(
        [...apiPlanets].sort((a, b) => handleASCSorting(a, b, columnToLowerCase)),
      );
      return soughtPlanets;
    case 'DESC':
      setSoughtPlanets(
        [...apiPlanets].sort((a, b) => handleDSCSorting(a, b, columnToLowerCase)),
      );
      return soughtPlanets;
    default:
      return apiPlanets;
    }
  }, [apiPlanets, handleASCSorting, setSoughtPlanets, soughtPlanets]);

  const handleSubmit = useCallback((event, sorting, sortCol) => {
    event.preventDefault();
    handleSortArr(sorting, sortCol);
  }, [handleSortArr]);

  const handleChange = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  const handleChangeColumn = (event) => {
    setColumn(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <Select
        options={ columnSort }
        dataTestid="column-sort"
        onChange={ handleChangeColumn }
        value={ column }
      />
      <label htmlFor="ASC">
        <input
          type="radio"
          value="ASC"
          checked={ sortFilt === 'ASC' }
          id="ASC"
          data-testid="column-sort-input-asc"
          onChange={ handleChange }
        />
        Ascendente
      </label>
      <label htmlFor="DESC">
        <input
          id="DESC"
          type="radio"
          checked={ sortFilt === 'DESC' }
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ handleChange }
        />
        Descendente
      </label>
      <Button
        data-testid="column-sort-button"
        onClick={ (ev) => handleSubmit(ev, sortFilt, column) }
      >
        Ordenar
      </Button>
    </form>
  );
}

export default SortFilters;
