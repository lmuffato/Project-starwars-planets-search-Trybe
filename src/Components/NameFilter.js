import React from 'react';

const NameFilter = (props) => (
  <form>
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Digite o nome de um planta"
      { ...props }
    />
  </form>
);

export default NameFilter;
