import React from 'react';
import Button from '../Generics/Button';
import Select from '../Generics/Select';
import { columnSort } from '../../services/data';

function SortFilters() {
  return (
    <div>
      <Select options={ columnSort } dataTestid="column-sort" />
      <label htmlFor="ASC">
        <input
          type="radio"
          name="ASC"
          id="ASC"
          data-testid="column-sort-input-asc"
        />
        Ascendente
      </label>
      <label htmlFor="DESC">
        <input
          id="DESC"
          type="radio"
          name="ASC"
          data-testid="column-sort-input-desc"
        />
        Descendente
      </label>
      <Button data-testid="column-sort-button">Ordenar</Button>
    </div>
  );
}

export default SortFilters;
