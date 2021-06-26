import React, { useContext } from 'react';
import ContextStauo from '../provider/ContextStauo';

function InputsComponents() {
  const { filters, setFilters } = useContext(ContextStauo);

  const handleChange = ({ target }) => (
    setFilters({
      ...filters,
      filterByName: {
        name: target.value.toLowerCase(),
      },
    })
  );

  return (
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
}

export default InputsComponents;
