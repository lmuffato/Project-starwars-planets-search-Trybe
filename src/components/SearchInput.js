import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SearchInput() {
  const { name, setName } = useContext(MyContext);

  return (
    <input
      type="text"
      value={ name }
      onChange={ (event) => setName(event.target.value) }
      data-testid="name-filter"
    />
  );
}

export default SearchInput;
