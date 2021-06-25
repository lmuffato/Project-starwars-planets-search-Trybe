import React, { useContext, useState, useEffect } from 'react';
import starWarsPlanets from '../../context';
import { columnObj, comparisonObj } from './data';
import Select from '../Select';

function Filters() {
  const { filters, setFilters, setData, backup } = useContext(starWarsPlanets);
  const [position, setPosition] = useState(0);
  const [localObj, setLocalObj] = useState({
    column: '',
    comparison: 'maior que',
    value: '',
  });
  const {
    filterByName: { name },
    filterByNumericValues,
  } = filters;
  const { column, comparison, value: size } = filterByNumericValues[position];
  const toSelectColumn = columnObj;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { ...filters.filterByName, name: value },
    });

    const filteredArray = backup.filter((planet) => planet.name.includes(value));
    setData(filteredArray);
  };

  const handleChange2 = ({ target: { name: nameAttribute, value } }) => {
    setLocalObj({
      ...localObj,
      [nameAttribute]: value,
    });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat(localObj),
    });
    setPosition((old) => old + 1);
    const index = toSelectColumn.options.indexOf(localObj.column);
    delete toSelectColumn.options[index];
    setLocalObj({ column: '', comparison: 'maior que', value: '' });
  };

  useEffect(() => {
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
  }, [filterByNumericValues]);

  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <Select selectData={ toSelectColumn } onChange={ handleChange2 } />
      <Select selectData={ comparisonObj } onChange={ handleChange2 } />
      <input
        type="number"
        name="value"
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
