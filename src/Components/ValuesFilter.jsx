import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function ValuesFilter() {
  const {
    filters,
    setFilters,
    filterOptions,
    setFilterOptions,
  } = useContext(planetsContext);

  const handleChange = ({ target }) => {
    const { value, id } = target;
    setFilterOptions({
      ...filterOptions,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        filterOptions,
      ],
    });
    setFilterOptions({
      column: '',
      comparison: 'maior que',
      value: '0',
    });
  };

  let columnsArr = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const { filterByNumericValues } = filters;

  if (filterByNumericValues) {
    filterByNumericValues.map((filter) => {
      const columnName = filter.column;
      const newArr = columnsArr.filter((column) => column !== columnName);
      columnsArr = newArr;
      return columnsArr;
    });
  }

  if (columnsArr.length === 1 && filterOptions.column === '') {
    setFilterOptions({
      column: columnsArr[0],
      comparison: 'maior que',
      value: '0',
    });
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="column">
        Column
        <select id="column" data-testid="column-filter" onChange={ handleChange }>
          {columnsArr.map((column) => (
            <option key={ column } value={ column }>{ column }</option>
          ))}
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison
        <select id="comparison" data-testid="comparison-filter" onChange={ handleChange }>
          <option selected value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Value
        <input
          id="value"
          type="number"
          value={ filterOptions.value }
          data-testid="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button type="submit" data-testid="button-filter">Submit Filter</button>
    </form>
  );
}

export default ValuesFilter;
