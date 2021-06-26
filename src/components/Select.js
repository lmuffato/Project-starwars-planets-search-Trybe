import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Select() {
  const {
    setColumn,
    setComparison,
    setValue,
    planetsData,
    handleFilterByNumbers,
  } = useContext(StarWarsContext);
  const { filterByNumericValues } = planetsData;
  const { column, comparison, value } = filterByNumericValues;
  return (
    <form>
      <label htmlFor="column">
        Selecione uma das colunas
        <select
          data-testid="column-filter"
          name="column"
          id="column"
          value={ column }
          onChange={ (ev) => setColumn(ev.target.value) }
        >
          <option value=""> </option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Selecione como comparar
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
          value={ comparison }
          onChange={ (ev) => setComparison(ev.target.value) }
        >
          <option value=""> </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Insirá o valor
        <input
          data-testid="value-filter"
          id="value-filter"
          type="number"
          value={ value }
          onChange={ (ev) => setValue(ev.target.value) }

        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleFilterByNumbers }

      >
        Pesquisar
      </button>
    </form>

  );
}

export default Select;
