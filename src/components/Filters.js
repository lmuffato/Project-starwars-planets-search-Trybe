import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
// import compareColumns from '../util/compareColumns';
// import comparisonSwitch from '../util/switch';

function Filters() {
  const { name, setName, setColumn, value, handleFilter, setComparison, setValue,
    column, comparison, filtersSelect,
  } = useContext(planetsContext);

  const handleChange = (target) => {
    if (target.id === 'name') return setName(target.value);
    if (target.id === 'column') return setColumn(target.value);
    if (target.id === 'comparison') return setComparison(target.value);
    if (target.id === 'value-filter') return setValue(target.value);
  };
  // let columns = '';

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
            // filterByNumericValues.length === 0 ? filtersSelect.forEach((element) => {
            //   columns = compareColumns(element, filterByNumericValues[0].column);
            // }) :
            filtersSelect.map((e, index) => (
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
        onClick={ () => handleFilter({ column, comparison, value }) }
      >
        Filter
      </button>
    </div>
  );
}

export default Filters;
