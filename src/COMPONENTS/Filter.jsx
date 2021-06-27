import React from 'react';

function Filter() {
  return (
    <label htmlFor="name-filter">
      Busque pelo nome
      <input
        data-testid="name-filter"
        id="name-filter"
        type="text"
        // value=
      />
    </label>
  );
}

export default Filter;
