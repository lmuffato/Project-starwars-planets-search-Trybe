import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filters() {
  const { handleSearchName, searchName } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="Name">
        Name:
        <input
          data-testid="name-filter"
          type="text"
          value={ searchName }
          onChange={ handleSearchName }
        />
      </label>
    </div>

  );
}
export default Filters;
