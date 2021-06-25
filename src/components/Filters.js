import React, { useContext, useEffect, useState } from 'react';
import PlanestContext from '../context/PlanetsContext';

function Filters() {
  const context = useContext(PlanestContext);

  const { filters,
    setFilterByName, sendFilterNumeric } = context;
  const { filterByNumericValues } = filters;
  const { name } = filters.filterByName;

  const [types, setFilterTypes] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const comparison = ['maior que', 'menor que', 'igual a'];

  const [filterByType, setFilterByType] = useState(types[0]);
  const [filtercomparison, setfilterComparison] = useState('maior que');
  const [number, setNumber] = useState(0);

  const setTypes = (event) => {
    const { value } = event.target;
    setFilterByType(value);
  };

  useEffect(() => setFilterByType(types[0]), [types]);

  const setComparison = (event) => {
    const { value } = event.target;
    if (filtercomparison.includes(value)) return;
    setfilterComparison(value);
  };

  const setFilterValue = (event) => {
    const { value } = event.target;
    setNumber(value);
  };

  const sendFilters = () => {
    const obj = { column: filterByType, comparison: filtercomparison, value: number };
    sendFilterNumeric(obj);
    setFilterTypes(types.filter((type) => type !== filterByType));
  };

  const disabled = types.length < 1;

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ setFilterByName }
        value={ name }
      />
      <select
        onChange={ setTypes }
        disabled={ disabled }
        value={ filterByType }
        data-testid="column-filter"
      >
        {types.length > 0 ? types.map((item) => (
          <option key={ item }>{item}</option>
        )) : <option disabled>Empty</option> }
      </select>
      <select
        disabled={ disabled }
        onChange={ setComparison }
        value={ filtercomparison }
        data-testid="comparison-filter"
      >
        {comparison.map((item) => (
          <option key={ item } value={ item }>{item}</option>
        ))}
      </select>
      <input
        disabled={ disabled }
        type="number"
        value={ number }
        onChange={ setFilterValue }
        data-testid="value-filter"
      />
      <button
        disabled={ disabled || number === 0 }
        type="button"
        onClick={ sendFilters }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filters;
