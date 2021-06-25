import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

export default function FilterForm() {
  const { setFilters } = useContext(MainContext);

  const handleChange = (event) => {
    setFilters({
      filterByName: {
        name: event.target.value,
      },
    });
  };
  return (
    <form>
      <label htmlFor="input-text">
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (event) => handleChange(event) }
        />
      </label>
    </form>
  );
}
