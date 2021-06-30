import React, { useContext, useState } from 'react';
import PlanetsContext from '../PlanetsContext/PlanetsContext';

function Form() {
  const { handleChangeNamePlanet, handleClickNumericValues } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [numberValue, setNumberValue] = useState(0);

  const sendValues = (ev) => {
    ev.preventDefault();
    handleClickNumericValues(column, comparison, numberValue);
  };

  return (
    <form>
      <label htmlFor="name-filter">
        Nome do Planeta:
        {' '}
        <input
          id="name-filter"
          type="text"
          data-testid="name-filter"
          onChange={ (ev) => handleChangeNamePlanet(ev) }
        />
      </label>
      <label htmlFor="column-filter">
        <select
          id="column-filter"
          data-testid="column-filter"
          onChange={ ({ target: { value } }) => setColumn(value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ ({ target: { value } }) => setComparison(value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor
        {' '}
        <input
          id="value-filter"
          type="number"
          data-testid="value-filter"
          onChange={ ({ target: { value } }) => setNumberValue(value) }
        />
      </label>
      <button
        id="button-filter"
        type="submit"
        data-testid="button-filter"
        onClick={ sendValues }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Form;
