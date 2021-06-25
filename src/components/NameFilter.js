import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function NameFilter() {
  const { nameFilter, setNameFilter } = useContext(SWContext);

  function handleChange(event) {
    setNameFilter(event.target.value);
  }

  return (
    <input
      type="text"
      onChange={ handleChange }
      value={ nameFilter }
      data-testid="name-filter"
      placeholder="Filtrar por nome"
      className="name-filter"
    />
  );
}

export default NameFilter;
