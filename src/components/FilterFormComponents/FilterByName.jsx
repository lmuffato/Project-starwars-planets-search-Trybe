import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';

export default function FilterByName() {
  const { setFilters } = useContext(MainContext);
  const handleChange = (event) => {
    setFilters({
      filterByName: {
        name: event.target.value,
      },
    });
  };
  return (
    <label htmlFor="input-text">
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => handleChange(event) }
      />
    </label>
  );
}
