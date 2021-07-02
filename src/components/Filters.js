import React, { useContext, useState } from 'react';
import context from '../store/context';

const Filters = () => {
  const { filters, setFilters, addFilterNumericValues } = useContext(context);

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setFilters({
      ...filters, // mantém filtros anteriores
      filterByName: { // acrescenta novo filtro na chave correta
        name: e.target.value,
      },
    });
  };

  const object = {
    column,
    comparison,
    value,
  };

  const filterColumn = (e) => {
    setColumn(e.target.value);
  };

  const filterComparison = (e) => {
    setComparison(e.target.value);
  };

  const filterValue = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    addFilterNumericValues(object);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        id="name-filter"
        placeholder="filtre pelo nome neste campo"
        onChange={ ((e) => handleChange(e)) }
      />
      <br />
      <select
        data-testid="column-filter"
        id="column-filter"
        name="column-filter"
        onChange={ filterColumn }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparison-filter"
        onChange={ filterComparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ filterValue }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Enviar
      </button>
    </div>
  );
};

export default Filters;
