import React, { useContext, useState } from 'react';
import FilterContext from '../context/FilterContext';

const INITIAL_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

const INITIAL_COLUMN = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Filter() {
  const { nameFilter, numericFilter } = useContext(FilterContext);
  const [state, setState] = useState(INITIAL_STATE);
  const [column, setColumn] = useState(INITIAL_COLUMN);

  const handleClick = () => {
    numericFilter(state);
    setColumn(column.filter((planet) => planet !== state.column));
    console.log(state.comparison);
  };

  const handleChange = ({ target: { id, value } }) => {
    setState({ ...state, [id]: value });
  };

  return (
    <form>
      <label htmlFor="filter">
        Nome:
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          onChange={ nameFilter }
        />
      </label>
      <select
        data-testid="column-filter"
        id="column"
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        id="value"
        placeholder="enter a number"
        onChange={ handleChange }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
