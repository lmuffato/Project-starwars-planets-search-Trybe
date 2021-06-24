import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function NameFilter() {
  const { data, setReturnData, nameFilter, setNameFilter } = useContext(SWContext);

  function handleChange(event) {
    setNameFilter(event.target.value);
    const filtered = data.filter((planet) => (
      planet.name.toLowerCase().includes(event.target.value.toLowerCase())));
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
