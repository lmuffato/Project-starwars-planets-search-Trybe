import React, { useContext, useEffect } from 'react';
import PlanetContext from '../../context/PlanetContext';

function InputTextFilter() {
  const {
    filterByName,
    // setFilterByName,
  } = useContext(PlanetContext);

  useEffect(() => {
  }, []);

  return (
    <span>
      <h1>{filterByName}</h1>
      {/* <input
        type="text"
        data-testid="name-filter"
        value={ filterByName }
        onChange={ (event) => setFilterByName(event.target.value) }
      /> */}
    </span>
  );
}

export default InputTextFilter;
