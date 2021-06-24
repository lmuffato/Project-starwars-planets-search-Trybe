import React, { useContext } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

const Filters = () => {
  const { filterByName } = useContext(StarWarsPlanetsContext);

  return (
    <div>
      <label htmlFor="name-filter">
        Digite o planeta:
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ filterByName }
        />
      </label>
    </div>
  );
};

export default Filters;
