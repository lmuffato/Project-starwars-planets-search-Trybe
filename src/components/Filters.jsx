import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filtersValue } = useContext(Context);

  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: null,
  });

  const handleFilters = ({ target: { name, value } }) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // console.log(filters);

  const handleSubmitFilter = (e) => {
    e.preventDefault();
    filtersValue(filters);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleFilters }
        required
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleFilters }
        required
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleFilters }
        required
      />
      <button
        type="button"
        onClick={ handleSubmitFilter }
        data-testid="button-filter"
      >
        Add filter
      </button>
    </div>
  );
}

export default Filters;
