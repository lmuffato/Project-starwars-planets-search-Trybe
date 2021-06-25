import React, { useContext, useState } from 'react';
import TableContext from '../context/TableContext';

const filterArray = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function FilterBar() {
  const [filterArr, setFilterArr] = useState(filterArray);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');

  const { setFilters, filters } = useContext(TableContext);

  function handleClick() {
    setFilters({ ...filters,
      filterByNumericValues: filters.filterByNumericValues.concat({
        column: columnFilter, comparison: comparisonFilter, value: valueFilter }) });
    setFilterArr(filterArr.filter((e) => e !== columnFilter));
    setColumnFilter('');
  }

  function removeFilter(e) {
    const filterToRemove = e.target.name;
    const newFilters = filters.filterByNumericValues
      .filter((el) => el.column !== filterToRemove);
    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
    setFilterArr(filterArr.concat(filterToRemove));
  }

  return (
    <>
      <form>
        <label htmlFor="planetName">
          Planet
          <input
            type="text"
            id="planetName"
            name="planetName"
            data-testid="name-filter"
            onChange={
              (e) => (
                setFilters({
                  ...filters, filterByName: { name: e.target.value },
                }))
            }
          />
        </label>
        <select
          data-testid="column-filter"
          value={ columnFilter }
          onChange={ (e) => (setColumnFilter(e.target.value)) }
        >
          {filterArr.map((e) => (
            (<option key={ e } name={ e } value={ e }>{e}</option>)
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          value={ comparisonFilter }
          onChange={ (e) => (setComparisonFilter(e.target.value)) }
        >
          <option name="maior que" value="maior que">maior que</option>
          <option name="menor que" value="menor que">menor que</option>
          <option name="igual a" value="igual a">igual a</option>
        </select>
        <label htmlFor="quantity">
          <input
            id="quantity"
            name="quantity"
            type="number"
            value={ valueFilter }
            data-testid="value-filter"
            onChange={ (e) => setValueFilter(e.target.value) }
          />
        </label>
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleClick }
        >
          Adicionar Filtro
        </button>
      </form>
      {filters.filterByNumericValues.map((el) => (
        <div data-testid="filter" key={ el.column } className="added-filters">
          <p key={ el.column }>{ `${el.column} ${el.comparison} ${el.value}` }</p>
          <button
            onClick={ (e) => removeFilter(e) }
            type="button"
            name={ el.column }
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}

export default FilterBar;
