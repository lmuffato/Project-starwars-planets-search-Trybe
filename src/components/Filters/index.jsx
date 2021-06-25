import React, { useContext } from 'react';
import starWarsPlanets from '../../context';
import { columnObj, comparisonObj } from './data';
import Select from '../Select';

function Filters() {
  const { filters, setFilters, setData, backup } = useContext(starWarsPlanets);
  const { filterByName: { name } } = filters;

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { ...filters.filterByName, name: value },
    });

    const filteredArray = backup.filter((planet) => planet.name.includes(value));
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
      <Select selectData={ columnObj } />
      <Select selectData={ comparisonObj } />
    </div>
  );
}

export default Filters;
