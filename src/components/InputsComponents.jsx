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
    <>
      <span>StarWars Planets</span>
      <input
        type="text"
        id="name-filter"
        className="input-search"
        data-testid="name-filter"
        placeholder="Digite sua busca aqui..."
        onChange={ (e) => handleChange(e) }
      />
    </>
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
