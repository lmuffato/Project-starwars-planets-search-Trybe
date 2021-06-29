import React, { useContext } from 'react';
import PlanetContext from '../Context/PlanetContext';

export default function FilteringPlanets() {
  const { column, setColumn, data, newData, setNewData, valueColumn, setValueColumn,
    number, setNumber, comparison, setComparison } = useContext(PlanetContext);

  const bigOrNot = ['maior que', 'menor que', 'igual a'];

  const filteringValue = ({ target }) => {
    if (target.name === 'column') setColumn(target.value);
    if (target.name === 'comparison') setComparison(target.value);
    if (target.name === 'num') setNumber(target.value);
  };

  const filteringThree = () => {
    let planetWithFilter = [];
    if (comparison === 'maior que') {
      planetWithFilter = newData.filter((val) => parseFloat(val[column]) > number);
      setNewData(planetWithFilter);
    }
    if (comparison === 'menor que') {
      planetWithFilter = newData.filter((val) => parseFloat(val[column]) < number);
    }
    if (comparison === 'igual a') {
      planetWithFilter = newData.filter((val) => val[column] === number);
      setNewData(planetWithFilter);
    }
    if (valueColumn.length > 1) {
      const valueNew = valueColumn.filter((val) => val !== column);
      setValueColumn(valueNew);
    }
  };

  const clearingFilters = () => {
    const initialState = data;
    setNewData(initialState);
  };

  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ filteringValue }
      >
        {valueColumn.map((val, index) => (
          <option
            key={ index }
            value={ val }
          >
            { val }
          </option>
        ))}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ filteringValue }
      >
        {bigOrNot.map((val, i) => (
          <option
            key={ i }
            value={ val }
          >
            { val }
          </option>
        ))}
      </select>
      <label htmlFor="number">
        <input
          name="num"
          type="number"
          data-testid="value-filter"
          onChange={ filteringValue }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filteringThree }
      >
        Filtrar
      </button>
      <div
        data-testid="filter"
      >
        <button
          type="button"
          value="X"
          onClick={ clearingFilters }
        >
          X
        </button>
      </div>
    </div>
  );
}
