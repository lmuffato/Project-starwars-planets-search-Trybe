import React, { useState, useContext } from 'react';
import StarContext from '../context/StarContext';

function FilterByNumber() {
  const { filterByNumber, setfilterByNumber } = useContext(StarContext);
  const [filter, setfilter] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    setfilter({
      ...filter,
      [name]: value,
    });
  };

  const handleClick = () => {
    setfilterByNumber([
      ...filterByNumber,
      filter,
    ]);
  };

  return (
    <>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      {/* <button type="button" data-testid="filter"> X </button> */}
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      {/* <button type="button" data-testid="filter"> X </button> */}
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      {/* <button type="button" data-testid="filter"> X </button> */}
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </>
  );
}

export default FilterByNumber;
