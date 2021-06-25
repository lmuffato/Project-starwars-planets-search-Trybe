import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterByText() {
  const { getText } = useContext(StarWarsContext);
  return (
    <input
      type="text"
      onChange={ getText }
      data-testid="name-filter"
      placeholder="Nome do planeta"
    />
  );
}

export default FilterByText;
