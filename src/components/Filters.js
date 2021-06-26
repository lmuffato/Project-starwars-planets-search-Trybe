import React, { useContext, useEffect } from 'react';
import starwarsContext from '../context/starwarsContext';
import NumericFilter from './NumericFilter';

export default function Filters() {
  const { filters, setFilters } = useContext(starwarsContext);

  const handleChange = ({ target }) => {
    /* console.log(target.value);
    console.log('INICIO FILTER NAME'); */

    console.log('FILTERS ANTES', filters);

    setFilters({ ...filters, filterByName: { name: target.value } });

    // console.log('FIM FILTER NAME');
  };

  // useEffect(() => {}, []);

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
