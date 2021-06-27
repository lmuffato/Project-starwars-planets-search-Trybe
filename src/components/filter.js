import React, { useContext } from 'react';
import Context from '../context/Context';

function Filter() {
  const { searchName, setColumn, setComparison, setNumericValues } = useContext(Context);
  const { column, comparison, setValue, value } = useContext(Context);

  const columnFilter = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparisonFilter = ['maior que', 'menor que', 'igual a'];

  function handleColumn(e) {
    setColumn(e.target.value);
  }

  function handleComparison(e) {
    setComparison(e.target.value);
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  function SetNumericFilter() {
    const filterData = [
      {
        column,
        comparison,
        value,
      },
    ];
    setNumericValues(filterData);
  }

  return (
    <div>
      <input
        type="text"
        onChange={ ({ target }) => searchName(target.value) }
        data-testid="name-filter"
      />

      <select data-testid="column-filter" onChange={ handleColumn }>
        { columnFilter.map((option) => <option key={ option }>{ option }</option>) }
      </select>

      <select data-testid="comparison-filter" onChange={ handleComparison }>
        { comparisonFilter.map((option) => <option key={ option }>{ option }</option>) }
      </select>

      <input type="number" data-testid="value-filter" onChange={ handleValue } />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ SetNumericFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
