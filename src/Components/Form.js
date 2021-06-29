import React, { useContext } from 'react';
import PlanetsContext from '../PlanetsContext/PlanetsContext';

function Form() {
  const { handleChangeNamePlanet } = useContext(PlanetsContext);

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
    </form>
  );
}

export default Form;
