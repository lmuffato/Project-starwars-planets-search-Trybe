import React, { useContext, useState } from 'react';
import { StarWarsContext } from '../contexts/StarWarsProvider';

const columns = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = ['maior que', 'menor que', 'igual a'];

const Filter = () => {
  const {
    filters,
    unavailableFilters,
    setName,
    setFiltersByNumericValues,
    setUnavailableFilters,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const [column, setColumn] = useState(columns[0]);
  const [comparison, setComparison] = useState(comparisons[0]);
  const [value, setValue] = useState('');

  return (
    <>
      <input
        data-testid="name-filter"
        onChange={ ({ target: { value: valueName } }) => setName(valueName) }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value: valueColumn } }) => setColumn(valueColumn) }
      >
        {columns.filter((col) => !unavailableFilters.includes(col))
          .map((col) => <option value={ col } key={ col }>{ col }</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value: valueComparison } }) => (
          setComparison(valueComparison)) }
      >
        {comparisons.map((comp) => (
          <option value={ comp } key={ comp }>{ comp }</option>))}
      </select>
      <input
        data-testid="value-filter"
        onChange={ ({ target: { value: valueNumber } }) => setValue(valueNumber) }
      />
      <button
        type="button"
        data-testid="button-filter"
        disabled={ !value }
        onClick={ () => {
          setFiltersByNumericValues([...filterByNumericValues,
            { column, comparison, value }]);
          unavailableFilters.push(column);
          setUnavailableFilters([...unavailableFilters]);
          setColumn(columns.filter((col) => !unavailableFilters.includes(col))[0]);
        } }
      >
        Filtrar
      </button>
    </>
  );
};
export default Filter;
