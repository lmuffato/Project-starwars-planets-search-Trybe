import React, { useContext, useEffect } from 'react';
import context from '../context/context';

function Filter() {
  const { data, setFilterData } = useContext(context);

  const filterPlanetByName = ({ target: { value } }) => {
    const filterPlanets = data.filter(({ name }) => name.includes(value));
    setFilterData(filterPlanets);
  }

  const renderFilter = () => {
    return (
      <label htmlFor="filter">
        Filter:
          <input
            id="filter"
            type="text"
            data-testid='name-filter'
            onChange={ filterPlanetByName }
          />
      </label>
    );
  }

  return (
    <div>
      { renderFilter() }
    </div>
  );
}

export default Filter;
