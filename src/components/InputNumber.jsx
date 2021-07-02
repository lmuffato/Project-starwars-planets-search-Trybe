import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import optionsColumn from '../context/data';

function InputNumber() {
  const [columnOption, setColumnOption] = useState(optionsColumn);

  const { columnFilter, setColumnFilter, comparisonFilter,
    setComparisonFilter, valueFilter, setValueFilter,
    newState, setNewState, getNames } = useContext(StarWarsContext);

  const handleClick = () => {
    const newFilter = { column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter };
    // const { filterByNumericValues } = getNumbers.filters;
    const objFilter = { filters: {
      filterByName: {
        name: getNames },
      filterByNumericValues: [...newState.filters.filterByNumericValues, newFilter],
    } };
    setNewState(objFilter);
    // console.log(newFilter);
    // console.log(newState);
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ (e) => setColumnFilter(e.target.value) }
      >
        {columnOption.map((column) => (
          <option key={ column }>{column}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ (e) => setComparisonFilter(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ (e) => setValueFilter(e.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default InputNumber;
