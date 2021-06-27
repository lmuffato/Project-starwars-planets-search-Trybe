import React, { useContext, useState, useEffect } from 'react';
import { columnObj, comparisonObj, orderObj } from './data';
import starWarsPlanets from '../../context';
import Select from '../Select';

function Filters() {
  const INITIAL_LOCAL_OBJ = { column: 'population', comparison: 'maior que', value: '' };
  const { filters, setFilters, setData, backup, setBackup } = useContext(starWarsPlanets);
  const { filterByName: { name }, filterByNumericValues, order } = filters;
  const [localObj, setLocalObj] = useState(INITIAL_LOCAL_OBJ);
  const [toSelectColumn, setSelectColumn] = useState(columnObj);
  const [localOrder, setLocalOrder] = useState(
    { column: 'name', sort: 'ASC' },
  );

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

  const handleChange3 = ({ target: { value, name: keyName } }) => {
    setLocalOrder({ ...localOrder, [keyName]: value });
  };

  const handleClickOrder = () => {
    setFilters({
      ...filters,
      order: localOrder,
    });
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

  const handleSort = ((orderType, array) => {
    const NEGATIVE = -1;
    if (orderType.column === 'name') {
      array = array.sort((a, b) => {
        if (a.name < b.name) { return NEGATIVE; }
        if (a.name > b.name) { return 1; }
        return 0;
      });
    } else {
      array = array.sort((planet1, planet2) => (
        order.sort === 'ASC'
          ? planet2[orderType.column] - planet1[orderType.column]
          : planet1[orderType.column] - planet2[orderType.column]
      ));
    }
    return array;
  });

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((dat) => dat.json());

      const sorted = handleSort(order, results);
      setData(sorted);
      setBackup(sorted);
    };
    getPlanets();
  }, []);

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
      const filtered = handleSort(order, array);
      setData(filtered);
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
      />
      <Select
        selectData={ comparisonObj }
        onChange={ handleChange2 }
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
      <div>
        <Select selectData={ orderObj } onChange={ handleChange3 } />
        <label htmlFor="ASC">
          ASC
          <input
            type="radio"
            name="sort"
            data-testid="column-sort-input-asc"
            id="ASC"
            value="ASC"
            onChange={ handleChange3 }
          />
        </label>
        <label htmlFor="DESC">
          DESC
          <input
            type="radio"
            name="sort"
            data-testid="column-sort-input-desc"
            id="DESC"
            value="DESC"
            onChange={ handleChange3 }
          />
        </label>
        <button
          type="button"
          onClick={ () => handleClickOrder() }
          data-testid="column-sort-button"
        >
          Ordenar
        </button>
      </div>
      {currentFilters.map((filterText) => (
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
          {`x ${filterText.filter}`}
        </button>
      ))}
    </div>
  );
}

export default Filters;
