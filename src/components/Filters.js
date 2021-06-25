import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Filters() {
  const {
    filters: { filterByName: { name } }, setName, setColumn,
    setComparison, setValue, column, comparison, setBtnFilter,
  } = useContext(planetsContext);

  const handleChange = (target) => {
    setBtnFilter(false);
    if (target.id === 'name') return setName(target.value);
    if (target.id === 'column') return setColumn(target.value);
    if (target.id === 'comparison') return setComparison(target.value);
    if (target.id === 'value-filter') return setValue(target.value);
  };

  return (
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
      <label htmlFor="column">
        <select
          id="column"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => handleChange(e.target) }
        >
          <option>{}</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => handleChange(e.target) }
        >
          <option>{}</option>
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
          onChange={ (e) => handleChange(e.target) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setBtnFilter(true) }
      >
        Filter
      </button>
    </div>
  );
}

export default Filters;
