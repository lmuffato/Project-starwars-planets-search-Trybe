import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const [nameInput, setNameInput] = useState('');
  const { filters, setFilters } = useContext(PlanetContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setNameInput(value);
    setFilters({ name: value });
    if (value === '') {
      const removedProperty = { ...filters };
      delete removedProperty.name;
      setFilters(removedProperty);
    }
  };

  return (
    <header>
      <input
        type="text"
        value={ nameInput }
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </header>
  );
}

export default Header;
