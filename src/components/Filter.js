import React, { useContext } from 'react';
import Context from '../context/Context';

const Filter = () => {
  const {
    filterByName,
    handleCustomFilter,
    options, handleButtonClick } = useContext(Context);

  return (
    <div>
      <input
        type="text"
        id="name-filter"
        data-testid="name-filter"
        placeholder="Digite aqui o nome do planeta"
        onChange={ filterByName }
      />

      <select
        data-testid="column-filter"
        id="column-filter"
        name="column"
        onChange={ handleCustomFilter }
      >
        {
          // Source: https://github.com/tryber/sd-09-project-starwars-planets-search/tree/tiago-yoneda-project-starwars-planet-search
          options.map((option) => (
            <option key={ option }>{ option }</option>
          ))
        }
      </select>

      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparison"
        onChange={ handleCustomFilter }
      >
        <option key="maior que">maior que</option>
        <option key="igual a">igual a</option>
        <option key="menor que">menor que</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={ handleCustomFilter }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleButtonClick }
      >
        Adicionar filtro
      </button>

    </div>
  );
};

export default Filter;
