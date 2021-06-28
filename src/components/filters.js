import React, { useState, useContext } from 'react';
import MyContext from '../context/myContext';

function Filters() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const { setfilterByName, filters, filterByNumber } = useContext(MyContext);
  function handleInputText(e) {
    setfilterByName(e.target.value);
  }

  // function handleColumn({ target }) {
  //   const { value } = target;
  //   setColumn(value);
  // }
  // function handleComparison({ target }) {
  //   const { value } = target;
  //   setComparison(value);
  // }
  // function handleValue({ target }) {
  //   const { value } = target;
  //   setValue(value);
  // }

  function filterByClick() {
    filterByNumber(column, comparison, value);
  }

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
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
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
