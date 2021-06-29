import React, { useCallback, useState } from 'react';
import Button from '../Generics/Button';
import Select from '../Generics/Select';
import { columnSort } from '../../services/data';
import useStarWars from '../../hooks/useStarWars';

function SortFilters() {
  const [sortFilt, setSort] = useState('ASC');
  const [column, setColumn] = useState('name');
  const { data, setSoughtPlanets } = useStarWars();

  const handleASCSorting = useCallback((firstVal, sndValue, columnFilt) => {
    const POSITIVE = 1;
    const NEGATIVE = -1;
    const ZERO = 0;
    if (Number(firstVal[columnFilt]) > Number(sndValue[columnFilt])) return POSITIVE;
    if (Number(firstVal[columnFilt]) < Number(sndValue[columnFilt])) return NEGATIVE;
    return ZERO;
  }, []);

  const handleDSCSorting = (firstVal, sndValue, columnFilt) => {
    const POSITIVE = 1;
    const NEGATIVE = -1;
    const ZERO = 0;
    if (Number(firstVal[columnFilt]) > Number(sndValue[columnFilt])) return NEGATIVE;
    if (Number(firstVal[columnFilt]) < Number(sndValue[columnFilt])) return POSITIVE;
    return ZERO;
  };

  const handleSortArr = useCallback((sorting, columnFilt) => {
    switch (sorting) {
    case 'ASC':
      return setSoughtPlanets(
        [...data].sort((a, b) => handleASCSorting(a, b, columnFilt)),
      );
    case 'DESC':
      return setSoughtPlanets(
        [...data].sort((a, b) => handleDSCSorting(a, b, columnFilt)),
      );
    default:
      return data;
    }
  }, [data, handleASCSorting, setSoughtPlanets]);

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
