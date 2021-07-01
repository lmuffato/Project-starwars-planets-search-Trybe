import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/myContext';

function Filters() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [optionsState, setOptionsState] = useState([]);
  const [newOptionState, setNewOptionState] = useState([]);
  const { setfilterByName, filters,
    filterByNumber } = useContext(MyContext);
  const { filterByNumericValues } = filters;

  function handleInputText(e) {
    setfilterByName(e.target.value);
  }

  function filterByClick() {
    filterByNumber(column, comparison, value);
  }

  useEffect(() => {
    const allOptions = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    setOptionsState(allOptions);
    setNewOptionState(allOptions);
  }, []);

  useEffect(() => {
    const selectedOptions = filterByNumericValues.map((element) => element.column);
    const filteredOptions = optionsState
      .filter((option) => !selectedOptions.includes(option));
    setNewOptionState(filteredOptions);
  }, [filterByNumericValues, optionsState]);

  return (
    <form>
      <input
        type="text"
        value={ filters.filterByName.name }
        data-testid="name-filter"
        onChange={ handleInputText }
      />
      <select
        data-testid="column-filter"
        name="column"
        value={ column }
        onChange={ (e) => setColumn(e.target.value) }
      >
        {newOptionState.map((option) => <option key={ option }>{option}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        nama="comparison"
        value={ comparison }
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="text"
        data-testid="value-filter"
        name="value"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterByClick }
      >
        Filtrar

      </button>
    </form>
  );
}

export default Filters;
