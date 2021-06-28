import React, { useContext, useState } from 'react';
import planetsContext from '../context/PlanetsContext';
// import compareColumns from '../util/compareColumns';
// import comparisonSwitch from '../util/switch';

function Filters() {
  const {
    name, setName, handleFilter, columns, filters: { filterByNumericValues },
  } = useContext(planetsContext);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const [column, setColumn] = useState('population');

  const handleChange = (target) => {
    if (target.id === 'name') setName(target.value);
    if (target.id === 'column') setColumn(target.value);
    if (target.id === 'comparison') setComparison(target.value);
    if (target.id === 'value-filter') setValue(target.value);
  };

  const filterButton = (obj) => {
    handleFilter(obj);
  };

  const options = columns;
  if (filterByNumericValues.length > 0) {
    columns.forEach((item, index) => {
      filterByNumericValues.forEach((filter) => {
        if (item === filter.column) {
          options.splice(index, 1);
        }
      });
    });
  }

  return (
    <div>
      <div>
        <label htmlFor="name">
          Name
          <input
            id="name"
            value={ name }
            data-testid="name-filter"
            onChange={ (e) => handleChange(e.target) }
          />
        </label>
      </div>
      <label htmlFor="column">
        <select
          id="column"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => handleChange(e.target) }
        >
          {
            options.map((e, index) => (
              <option key={ index }>{e}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => handleChange(e.target) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          type="number"
          id="value-filter"
          data-testid="value-filter"
          value={ value }
          onChange={ (e) => handleChange(e.target) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => filterButton({ comparison, value, column }) }
      >
        Filter
      </button>
    </div>
  );
}

export default Filters;
