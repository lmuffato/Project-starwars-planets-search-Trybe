import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function FilterText() {
  const { filteredByName } = useContext(AppContext);

  const handleSearch = ({ target: { value } }) => {
    filteredByName(value);
  };

  return (
    <label htmlFor="inputsearch">
      <input
        type="text"
        name="inputsearch"
        data-testid="name-filter"
        onChange={ handleSearch }
        placeholder="search"
      />
    </label>
  );
}
