import React, { useContext } from 'react';
import starwarsContext from '../context/starwarsContext';
import NumericFilter from './NumericFilter';

export default function Filters() {
  const { filters, setFilters } = useContext(starwarsContext);

  const handleChange = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
  };

  return (
    <div>
      <label htmlFor="input-filter">
        Filtrar por nome:
        <input
          type="text"
          data-testid="name-filter"
          id="input-filter"
          name="input-filter"
          value={ filters.filterByName.name }
          onChange={ (e) => handleChange(e) }
        />
      </label>
      <NumericFilter />

    </div>
  );
}
