import React, { useState, useContext } from 'react';
import { filters as filtersContext } from '../../contexts/starWars';
import Option from '../Option';

export default function FilterByNumericValues() {
  const [collumn, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [valueToFilter, setValue] = useState(0);
  const { setFilteredNumeric } = useContext(filtersContext);

  const collumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisons = ['maior que', 'menor que', 'igual a'];
  return (
    <div>
      <select
        value={ collumn }
        onChange={ ({ target: { value } }) => setColumn(value) }
        data-testid="column-filter"
      >
        {collumns.map((value, i) => (
          <Option key={ i } value={ value } />
        ))}
      </select>
      <select
        value={ comparison }
        onChange={ ({ target: { value } }) => setComparison(value) }
        data-testid="comparison-filter"
      >
        {comparisons.map((value, i) => (
          <Option key={ i } value={ value } />
        ))}
      </select>
      <input
        type="number"
        onChange={ ({ target: { value } }) => setValue(value) }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ () => {
          setFilteredNumeric([{ collumn, comparison, value: valueToFilter }]);
        } }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}
