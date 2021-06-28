import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FilterOrdenBy({ filterby }) {
  const [sortBy, setSortBy] = useState('ASC');
  const [optionBy, setOptionBy] = useState('Name');

  const handleChange = ({ target }) => setSortBy(target.id);
  const handleOption = ({ target }) => setOptionBy(target.value);

  return (
    <div>
      <select onChange={ handleOption } data-testid="colum-sort">
        <option value="name">name</option>
        <option value="name">name</option>

      </select>
      <label htmlFor="ASC">
        Ascendente
        <input
          data-testid="column-sort-input-asc"
          id="ASC"
          type="radio"
          checked={ sortBy === 'ASC' }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="DESC">
        Descendente
        <input
          data-testid="column-sort-input-desc"
          id="DESC"
          type="radio"
          checked={ sortBy === 'DESC' }
          onChange={ handleChange }
        />
      </label>
      <button
        data-testid="colum-sort-button"
        type="button"
        onClick={ () => filterby(sortBy, optionBy) }
      >
        Ordenar Filtro
      </button>
    </div>
  );
}

FilterOrdenBy.propTypes = {
  filterby: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FilterOrdenBy;
