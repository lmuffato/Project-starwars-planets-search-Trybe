import React, { useContext } from 'react';
import { StarWarsContext } from '../contexts/StarWarsProvider';

const FilterName = () => {
  const { filters: { filterByName: { name } }, setName } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  return (
    <input
      data-testid="name-filter"
      value={ name }
      onChange={ handleChange }
    />
  );
};

export default FilterName;
