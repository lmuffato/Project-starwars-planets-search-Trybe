import React, { useContext } from 'react';
import Context from '../context/Context';

function Comparison() {
  const {
    setColumnSelected, columnSelected, setColumnSelected2, setComparisonSelected,
    comparisonSelected, setComparisonSelected2, setValueToBeCompared,
    setValueToBeCompared2, handleClick, firstFilter,
  } = useContext(Context);

  const columnSetter = (value) => {
    if (columnSelected.length === 0) {
      setColumnSelected(value);
    } else setColumnSelected2(value);
  };

  const comparisonSetter = (value) => {
    if (comparisonSelected.length === 0) {
      setComparisonSelected(value);
    } else setComparisonSelected2(value);
  };

  const valueSetter = (value) => {
    if (firstFilter.length === 0) {
      setValueToBeCompared(value);
    } else if (firstFilter.length > 0) {
      setValueToBeCompared2(value);
    }
  };

  function popOption() {
    if (firstFilter.includes('population')) {
      return undefined;
    }
    return <option value="population">population</option>;
  }
  function selOption() {
    if (firstFilter.length > 0) {
      return undefined;
    }
    return <option value="select">select</option>;
  }
  function orbOption() {
    if (firstFilter.includes('orbital_period')) {
      return undefined;
    }
    return <option value="orbital_period">orbital_period</option>;
  }
  function diaOption() {
    if (firstFilter.includes('diameter')) {
      return undefined;
    }
    return <option value="diameter">diameter</option>;
  }
  function rotOption() {
    if (firstFilter.includes('rotation_period')) {
      return undefined;
    }
    return <option value="rotation_period">rotation_period</option>;
  }
  function surOption() {
    if (firstFilter.includes('surface_water')) {
      return undefined;
    }
    return <option value="surface_water">surface_water</option>;
  }

  return (
    <form>
      <select
        name="column-filter"
        data-testid="column-filter"
        onChange={ (event) => columnSetter(event.target.value) }
      >
        { selOption() }
        { popOption() }
        { orbOption() }
        { diaOption() }
        { rotOption() }
        { surOption() }
      </select>

      <select
        name="comparison-filter"
        data-testid="comparison-filter"
        onChange={ (event) => comparisonSetter(event.target.value) }
      >
        <option>select</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="value-filter"
        data-testid="value-filter"
        type="number"
        onChange={ (event) => valueSetter(event.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filter
      </button>
    </form>
  );
}

export default Comparison;
