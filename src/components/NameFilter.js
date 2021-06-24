import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function NameFilter() {
  const { data, setReturnData, nameFilter, setNameFilter } = useContext(SWContext);

  function handleChange(event) {
    setNameFilter(event.target.value);
    const filtered = data.filter((planet) => planet.name.includes(event.target.value));
    setReturnData(filtered);
  }

  return (
    <input
      type="text"
      onChange={ handleChange }
      value={ nameFilter }
      data-testid="name-filter"
    />
  );
}

export default NameFilter;
