import React, { useContext } from 'react';
import starwarsContext from '../context/starwarsContext';
import NumericFilter from './NumericFilter';

export default function Filters() {
  const { filters, setFilters } = useContext(starwarsContext);
  const { filterByNumericValues, filterByName } = filters;

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  const handleClick = (column) => {
    console.log('ENTROU NO CLICK');
    console.log(filterByNumericValues);
    const filtredResult = filterByNumericValues.filter(
      (filter) => filter.column !== column,
    );
    console.log(filtredResult);
    setFilters({
      ...filters,
      filterByNumericValues: filtredResult,
    });
  };

  return (
    <div>
      <label htmlFor="input-filter">
        Filtrar por nome:
        <input
          type="text"
          data-testid="name-filter"
          id="input-filter"
          name="input-filter"
          value={ filterByName.name }
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <NumericFilter />
      {filterByNumericValues.length >= 1 ? filterByNumericValues.map(
        (filter, index) => {
          if (filter.column) {
            return (
              <div key={ index }>
                <span>
                  { `${filter.column} ${filter.comparison} ${filter.value}`}
                </span>
                <button
                  type="button"
                  data-testid="filter"
                  onClick={ () => handleClick(filter.column) }
                >
                  X
                </button>
              </div>);
          }
          return '';
        },
      ) : 'No filters'}
    </div>
  );
}
