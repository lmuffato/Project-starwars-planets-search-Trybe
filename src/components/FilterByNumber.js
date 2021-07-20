import React, { useContext, useState } from 'react';
import planetContext from '../Context/planetContext';

const FilterByNumber = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');

  const {
    handleClick,
    population,
    orbitalPeriod,
    diameter,
    rotationPeriod,
    surfaceWater,
  } = useContext(planetContext);

  const handleChangeColumn = (event) => {
    setColumn(event.target.value);
  };

  const handleChangeComparison = (event) => {
    setComparison(event.target.value);
  };

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };
  return (
    <form>
      <label htmlFor="select">
        <select
          type="select"
          data-testid="column-filter"
          value={ column }
          onChange={ handleChangeColumn }
        >
          {population}
          {orbitalPeriod}
          {diameter}
          {rotationPeriod}
          {surfaceWater}
        </select>
        <select
          type="select"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ handleChangeComparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ handleChangeValue }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => handleClick(column, comparison, value) }
        >
          Filtrar
        </button>
      </label>
    </form>
  );
};

export default FilterByNumber;
