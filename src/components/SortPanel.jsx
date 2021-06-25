import React from 'react';
import useStarWars from '../hooks/useStarWars';
import { columnSort } from '../services/data';
import Button from './Button';
import Select from './Select';

function SortPanel() {
  const {
    data,
    newArrayOfPlanets,
    isLoading,
    setIsSorted,
    // isSorted,
    // sorting,
    // setSorting,
  } = useStarWars();

  function handleClick(event) {
    event.preventDefault();
    console.log('click');
    if (!isLoading && data) {
      console.log('sort');
      setIsSorted(true);
    }

    if (!isLoading && newArrayOfPlanets) {
      setIsSorted(true);
    }
  }

  return (
    <div>
      <form>
        <Select options={ columnSort } dataTestid="column-sort" />
        <label htmlFor="ASC">
          <input
            data-testid="column-sort-input-asc"
            id="ASC"
            name="ASC"
            type="radio"
            // checked={ !isSorted }
          />
          Ascendente
        </label>
        <label htmlFor="DESC">
          <input
            id="DESC"
            name="DESC"
            type="radio"
            data-testid="column-sort-input-desc"
          />
          Decrescente
        </label>
        <Button data-testid="column-sort-button" onClick={ handleClick }>
          Ordenar
        </Button>
      </form>
    </div>
  );
}

export default SortPanel;
