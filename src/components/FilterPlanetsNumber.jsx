import React, { useState, useContext } from 'react';
import { dropDrawComparation } from '../data';
import MyContext from '../context/myContext';

function FilterPlanetsNumber() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { handleClick } = useContext(MyContext);

  return (
    <from>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {dropDrawComparation
          .map((drop) => <option key={ drop } value={ drop }>{drop}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => setComparison(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClick(column, comparison, value) }
      >
        Filtar
      </button>
    </from>
  );
}

export default FilterPlanetsNumber;
