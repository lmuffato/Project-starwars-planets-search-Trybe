import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Filters() {
  const { filters: { filterByName: { name } }, setName } = useContext(planetsContext);

  const handleChange = ({ value }) => {
    setName(value);
    console.log(value);
  };

  return (
    <label htmlFor="name">
      Name
      <input
        id="name"
        value={ name }
        data-testid="name-filter"
        onChange={ (e) => handleChange(e.target) }
      />
    </label>
  );
}

export default Filters;
