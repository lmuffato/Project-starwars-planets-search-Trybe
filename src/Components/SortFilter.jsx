import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function SortFilter() {
  const { filters, setFilters, orderOption, setOrderOption } = useContext(planetsContext);

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleChange = ({ target }) => {
    const { id, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    setOrderOption({
      ...orderOption,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilters({
      ...filters,
      order: {
        ...orderOption,
      },
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="column">
        Select a column to sort:
        <select id="column" data-testid="column-sort" onChange={ handleChange }>
          { columns.map((column) => (
            <option key={ column } value={ column }>{ column }</option>
          ))}
        </select>
      </label>
      <label htmlFor="sort">
        Select an order to sort the table:
        <input
          name="sort"
          value="ASC"
          id="sort"
          type="radio"
          data-testid="column-sort-input-asc"
          onChange={ handleChange }
        />
        <input
          name="sort"
          value="DESC"
          id="sort"
          type="radio"
          data-testid="column-sort-input-desc"
          onChange={ handleChange }
        />
      </label>
      <button type="submit" data-testid="column-sort-button">Sort</button>
    </form>
  );
}

export default SortFilter;
