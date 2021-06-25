import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Filters() {
  const {
    filters: { filterByName: { name } }, setName, setColumn,
    setComparison, setValue, column } = useContext(planetsContext);

  const handleChange = (target) => {
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
          <option value="population">Population</option>
          <option value="orbital">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation">Rotation Period</option>
          <option value="surface">Surface Water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ (e) => handleChange(e.target) }
        >
          <option>{}</option>
          <option value="bigger">Bigger then</option>
          <option value="less">Less then</option>
          <option value="equal">Equal to</option>
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
    </div>
  );
}

export default Filters;
