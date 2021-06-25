import React, { useContext } from 'react';
import starWarContext from '../context/starWarsContext';

export default function SearchBar() {
  const {
    setFilteredPlanets,
  } = useContext(starWarContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ ({ target }) => setFilteredPlanets(target.value) }
      />
    </div>
  );
}
