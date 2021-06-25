import React, { useCallback, useState } from 'react';
import useStarWars from '../hooks/useStarWars';
import { columnSort } from '../services/data';
import Button from './Button';
import Select from './Select';

function SortPanel() {
  const [order, setOrder] = useState('ASC');
  const {
    // data,
    // newArrayOfPlanets,
    // isLoading,
    // setIsSorted,
    sortSelectColumn,
    setSortColumn,
    // isSorted,
    // sorting,
    // setSorting,
  } = useStarWars();

  const handleChange = useCallback((event) => {
    setSortColumn(event.target.value);
  }, [setSortColumn]);

  const handleClick = useCallback((event) => {
    event.preventDefault();
    console.log('click');
    console.log(sortSelectColumn);
    console.log(order); // captura o value de column sort
    // if (!isLoading && data) {
    //   console.log('sort');
    //   console.log(sortSelectColumn);
    //   setIsSorted(true);
    // }

    // if (!isLoading && newArrayOfPlanets) {
    //   setIsSorted(true);
    // }
  }, [sortSelectColumn, order]);

  const handleInputRadioChange = useCallback((event) => {
    setOrder(event.target.value);
  }, [setOrder]);

  // Formulário controlado --> falta: conectar tudo isso às funções criadas no contextAPI

  return (
    <div>
      <form>
        <Select
          options={ columnSort }
          dataTestid="column-sort"
          value={ sortSelectColumn }
          onChange={ handleChange }
        />
        <label htmlFor="ASC">
          <input
            data-testid="column-sort-input-asc"
            id="ASC"
            // name="order"
            value="ASC"
            type="radio"
            onChange={ handleInputRadioChange }
            checked={ order === 'ASC' }
          />
          Ascendente
        </label>
        <label htmlFor="DESC">
          <input
            id="DESC"
            checked={ order === 'DESC' }
            value="DESC"
            type="radio"
            data-testid="column-sort-input-desc"
            onChange={ handleInputRadioChange }
          />
          Descendente
        </label>
        <Button data-testid="column-sort-button" onClick={ handleClick }>
          Ordenar
        </Button>
      </form>
    </div>
  );
}

export default SortPanel;
