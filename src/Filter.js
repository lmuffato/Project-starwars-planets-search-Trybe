import React, { useContext } from 'react';
import context from './context';

function Filter() {
  const { filters, setFilters, setFilterByColumn,
    setFilterByComparison, setFilterByValue, setKeyButton,
  } = useContext(context);

  const categories = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  return (
    <form>

      {/*  Caixa de pesquisa que filtra por nome */}
      <label htmlFor="inputNameFilter">
        Planet Name:
        <input
          type="text"
          name="namePlanet"
          id="inputNameFilter"
          data-testid="name-filter"
          onChange={
            ({ target }) => (
              setFilters({
                ...filters, filterByName: { name: target.value },
              }))
          }
        />
      </label>

      {/*  Dropdown que filtra por categorias */}
      <label htmlFor="column-filter">
        <select
          id="column-filter"
          data-testid="column-filter"
          onClick={
            ({ target }) => setFilterByColumn(target.value)
          }
        >
          { categories.map((category) => (
            <option value={ category } key={ category }>
              { category }
            </option>
          )) }
        </select>
      </label>

      {/*  Dropdown que filtra por comparação */}
      <label htmlFor="comparison-filter">
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          onClick={
            ({ target }) => setFilterByComparison(target.value)
          }
        >
          <option key="comparison1" value="maior que">maior que</option>
          <option key="comparison2" value="menor que">menor que</option>
          <option key="comparison3" value="igual a">igual a</option>
        </select>
      </label>

      {/*  Filtra por número */}
      <label htmlFor="value-filter">
        <input
          id="value-filter"
          type="number"
          data-testid="value-filter"
          onChange={
            ({ target }) => setFilterByValue(target.value)
          }
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        onClick={
          setKeyButton(false)
        }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Filter;
