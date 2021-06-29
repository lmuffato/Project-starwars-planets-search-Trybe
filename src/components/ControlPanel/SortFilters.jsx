import React, { useCallback, useState } from 'react';
import Button from '../Generics/Button';
import Select from '../Generics/Select';
import { columnSort } from '../../services/data';
import useStarWars from '../../hooks/useStarWars';

function SortFilters() {
  const [sortFilt, setSort] = useState('ASC'); // estado e onChange dos inputs radio
  const [column, setColumn] = useState('name'); // estado e onChange do select/coluna
  const { data, setSoughtPlanets } = useStarWars();

  // Req. 6 - parte 2 -- ordenação ascendente
  const handleASCSorting = useCallback((firstVal, sndValue, columnFilt) => {
    const POSITIVE = 1;
    const NEGATIVE = -1;
    const ZERO = 0;
    if (Number(firstVal[columnFilt]) > Number(sndValue[columnFilt])) return POSITIVE;
    if (Number(firstVal[columnFilt]) < Number(sndValue[columnFilt])) return NEGATIVE;
    return ZERO;
  }, []);

  // Req. 6 - parte 2 -- ordenação descendente
  const handleDSCSorting = (firstVal, sndValue, columnFilt) => {
    const POSITIVE = 1;
    const NEGATIVE = -1;
    const ZERO = 0;
    if (Number(firstVal[columnFilt]) > Number(sndValue[columnFilt])) return NEGATIVE;
    if (Number(firstVal[columnFilt]) < Number(sndValue[columnFilt])) return POSITIVE;
    return ZERO;
  };

  // Req. 6 - parte 2 -- switch case das ordenações, de acordo com o valor do input radio
  const handleSortArr = useCallback(
    (sorting, columnFilt) => {
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
    },
    [data, handleASCSorting, setSoughtPlanets],
  );

  const handleSubmit = useCallback(
    (event, sorting, sortCol) => {
      event.preventDefault();
      handleSortArr(sorting, sortCol);
    },
    [handleSortArr],
  );

  const handleChange = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  const handleChangeColumn = (event) => {
    setColumn(event.target.value);
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

// Referências consultadas:
// --> Documentação do sort: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// --> Curso de React da Udemy:
// ---> Em especial, as seções 7 e 8 - Efeito colateral e Formulário controlado: https://www.udemy.com/share/102AiqAEYecl5QRnoJ/
