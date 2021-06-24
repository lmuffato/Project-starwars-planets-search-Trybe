import React, { useContext } from 'react';
import ContextStauo from '../provider/ContextStauo';

function inputs(filters, setFilters) {
  const handleChange = ({ target }) => (
    setFilters({
      ...filters,
      filterByName: {
        name: target.value.toLowerCase(),
      },
    })
  );

  const inputSearch = () => (
    <input
      data-testid="name-filter"
      id="name-filter"
      type="text"
      onChange={ (e) => handleChange(e) }
    />
  );

  return (
    inputSearch()
  );
}

function InputsComponents() {
  const { filters, setFilters } = useContext(ContextStauo);

  return (
    inputs(filters, setFilters)
  );
}

export default InputsComponents;
