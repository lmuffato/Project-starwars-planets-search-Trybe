import React, { useContext } from 'react';
import starWarsPlanets from '../../context';
import { columnObj, comparisonObj } from './data';
import Select from '../Select';

function Filters() {
  const { filters, setFilters, setData, backup } = useContext(starWarsPlanets);
  const {
    filterByName: { name },
    filterByNumericValues: { column, comparison, value: size },
  } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { ...filters.filterByName, name: value },
    });

    const filteredArray = backup.filter((planet) => planet.name.includes(value));
    setData(filteredArray);
  };

  const handleChange2 = ({ target: { name: nameAttribute, value } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: {
        ...filters.filterByNumericValues, [nameAttribute]: value,
      },
    });
  };

  const handleClick = () => {
    let filteredArray = [];

    if (comparison === 'maior que') {
      filteredArray = backup.filter((planet) => (
        parseInt(planet[column], 10) > parseInt(size, 10)));
    } else if (comparison === 'menor que') {
      filteredArray = backup.filter((planet) => (
        planet[column] < size || planet[column] === 'unknown'));
    } else {
      filteredArray = backup.filter((planet) => (
        planet[column] === size));
    }

    setData(filteredArray);
  };

  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <Select selectData={ columnObj } onChange={ handleChange2 } />
      <Select selectData={ comparisonObj } onChange={ handleChange2 } />
      <input
        type="number"
        name="value"
        value={ size }
        onChange={ handleChange2 }
        data-testid="value-filter"
      />
      <button
        type="button"
        onClick={ () => handleClick() }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
