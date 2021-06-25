import React, { useContext } from 'react';
import starwarsContext from '../context/starwarsContext';

export default function Filters() {
  const { filters, setFilters } = useContext(starwarsContext);

  const handleChange = ({ target }) => {
    const updateFilterName = async () => {
      await setFilters({ filterByName: { name: target.value } });
    };
    updateFilterName();
    console.log(filters);
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

    </div>
  );
}
