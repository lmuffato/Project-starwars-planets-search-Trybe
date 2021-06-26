import React, { useState, useContext } from 'react';
import MyContext from '../context/myContext';
import { checkedFilter, chekedDropDraw } from '../utils/functions';

function FilterPlanetsNumber() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { handleClick, filterByNumericValues } = useContext(MyContext);

  return (
    <from>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {chekedDropDraw(filterByNumericValues)
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
        onClick={ () => {
          if (checkedFilter(filterByNumericValues, column)) {
            handleClick(column, comparison, value);
          }
        } }
      >
        Filtar
      </button>
    </from>
  );
}

export default FilterPlanetsNumber;
