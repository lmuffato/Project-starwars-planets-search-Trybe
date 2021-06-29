import React, { useState, useContext } from 'react';

function Filter() {
  const [dataFiltered, setDataFiltered] = useState('');
  const handleChange = (e) => {
    e.preventdefault();
    setDataFiltered(e.target.value);
  };
  return (
    <form>
      <input type="text" data-testid="name-filter" onChange={ (e) => handleChange(e) } />
      <button type="button" data-testid="filter"> X </button>
      <select data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <button type="button" data-testid="filter"> X </button>
      <select data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <button type="button" data-testid="filter"> X </button>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => handleChange(e) }
      />
      <button type="button" data-testid="filter"> X </button>
    </form>
  );
}

export default Filter;
