import React, { useContext, useState } from 'react';
import MyContext from '../contexts/MyContext';

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
    setOrder,
    headers,
  } = useContext(MyContext);
  const { filterByNumericValues } = filters;

  const [column, setColumn] = useState(columns[0]);
  const [comparison, setComparison] = useState(comparisons[0]);
  const [value, setValue] = useState('');
  const [header, setHeader] = useState('name');
  const [sort, setSort] = useState('ASC');

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
      <select
        value={ header }
        data-testid="column-sort"
        onChange={ ({ target: { value: valueHeader } }) => setHeader(valueHeader) }
      >
        {Object.keys(headers)
          .map((options) => (
            <option value={ options } key={ options }>{options}</option>))}
      </select>
      <label htmlFor="asc">
        <input
          defaultChecked
          name="order"
          value="ASC"
          data-testid="column-sort-input-asc"
          type="radio"
          id="asc"
          onChange={ ({ target: { value: valueASC } }) => setSort(valueASC) }
        />
        Ascendente
      </label>

      <label htmlFor="desc">
        <input
          name="order"
          value="DESC"
          data-testid="column-sort-input-desc"
          type="radio"
          id="desc"
          onChange={ ({ target: { value: valueDESC } }) => setSort(valueDESC) }
        />
        Descendente
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          setOrder({ column: header, sort });
        } }
      >
        Filtrar
      </button>
    </>
  );
};
export default Filter;
