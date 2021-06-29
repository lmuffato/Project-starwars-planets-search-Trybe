import React, { useCallback, useState } from 'react';
import Button from '../Generics/Button';
import Select from '../Generics/Select';
import { columnSort } from '../../services/data';

function SortFilters() {
  const [sort, setSort] = useState('ASC');
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log(sort);
  }, [sort]);

  const handleChange = useCallback((event) => {
    setSort(event.target.value);
  }, []);

  return (
    <form>
      <Select options={ columnSort } dataTestid="column-sort" />
      <label htmlFor="ASC">
        <input
          type="radio"
          value="ASC"
          checked={ sort === 'ASC' }
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
          checked={ sort === 'DESC' }
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ handleChange }
        />
        Descendente
      </label>
      <Button
        data-testid="column-sort-button"
        onClick={ (ev) => handleSubmit(ev) }
      >
        Ordenar
      </Button>
    </form>
  );
}

export default SortFilters;
