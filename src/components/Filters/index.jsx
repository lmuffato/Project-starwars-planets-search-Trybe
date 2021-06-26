import React, { useContext, useState, useEffect } from 'react';
import { columnObj, comparisonObj } from './data';
import starWarsPlanets from '../../context';
import Select from '../Select';

function Filters() {
  const INITIAL_LOCAL_OBJ = { column: '', comparison: 'maior que', value: '' };
  const { filters, setFilters, setData, backup } = useContext(starWarsPlanets);
  const { filterByName: { name }, filterByNumericValues } = filters;
  const [localObj, setLocalObj] = useState(INITIAL_LOCAL_OBJ);
  const [toSelectColumn, setSelectColumn] = useState(columnObj);

  const currentFilters = filterByNumericValues
    .map((filter, index) => ({ filter: filter.column, index }));

  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: { ...filters.filterByName, name: value },
    });
  };

  const handleChange2 = ({ target: { name: nameAttribute, value } }) => {
    setLocalObj({ ...localObj, [nameAttribute]: value });
  };

  const handleClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, localObj],
    });
    const index = toSelectColumn.options.indexOf(localObj.column);
    toSelectColumn.options.splice(index, 1);
    const newOptions = { ...toSelectColumn };
    setSelectColumn(newOptions);
    setLocalObj(INITIAL_LOCAL_OBJ);
  };

  // filters did update
  useEffect(() => {
    const dofilter = () => {
      let array = backup;
      if (name !== '') { array = array.filter((planet) => planet.name.includes(name)); }
      if (filterByNumericValues.length !== 0) {
        filterByNumericValues.forEach(({ column, comparison, value }) => {
          if (comparison === 'maior que') {
            array = array.filter((planet) => (
              parseInt(planet[column], 10) > parseInt(value, 10)));
          } else if (comparison === 'menor que') {
            array = array.filter((planet) => (
              planet[column] < value || planet[column] === 'unknown'));
          } else {
            array = array.filter((planet) => (
              planet[column] === value));
          }
        });
      }
      setData(array);
    };
    dofilter();
  }, [filters]);

  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ handleChange }
        data-testid="name-filter"
      />
      <Select
        selectData={ toSelectColumn }
        onChange={ handleChange2 }
        value={ localObj.column }
      />
      <Select
        selectData={ comparisonObj }
        onChange={ handleChange2 }
        value={ localObj.comparison }
      />
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
      { currentFilters.map((filterText) => (
        <button
          type="button"
          key={ `${filterText.filter}-button` }
          data-testid="filter"
          onClick={ () => {
            filterByNumericValues.splice(filterText.index, 1);
            const newOptions = {
              ...toSelectColumn,
              options: toSelectColumn.options.concat(filterText.filter),
            };
            setSelectColumn(newOptions);
            setFilters({ ...filters });
          } }
        >
          { `x ${filterText.filter}`}
        </button>
      ))}
    </div>
  );
}

export default Filters;
