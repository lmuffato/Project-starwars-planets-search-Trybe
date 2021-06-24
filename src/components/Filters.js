import React, { useContext } from 'react';
import StarWarsPlanetsContext from '../context/StarWarsPlanetsContext';

const Filters = () => {
  const { filterByName,
    customFilter,
    changeCustomFilter,
    numericFilter,
  } = useContext(StarWarsPlanetsContext);

  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleClick = () => {
    numericFilter(customFilter);
  };

  return (
    <div>
      <fieldset>
        <label htmlFor="name-filter">
          Digite o nome do planeta:
          <input
            type="text"
            id="name-filter"
            data-testid="name-filter"
            onChange={ filterByName }
          />
        </label>
        <label htmlFor="column-filter">
          _Selecione a busca por coluna:
          <select
            data-testid="column-filter"
            id="column-filter"
            name="column"
            onChange={ changeCustomFilter }
          >
            {options.map((option) => (
              <option key={ option }>{ option }</option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Tipo:
          <select
            data-testid="comparison-filter"
            id="comparison-filter"
            name="comparison"
            onChange={ changeCustomFilter }
          >
            <option key=">">maior que</option>
            <option key="=">igual a</option>
            <option key="<">menor que</option>
          </select>
        </label>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={ changeCustomFilter }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </fieldset>
    </div>
  );
};

export default Filters;
