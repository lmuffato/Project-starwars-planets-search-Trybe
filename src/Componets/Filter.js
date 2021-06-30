import React, { useContext, useState } from 'react';
import StarWarsContext from '../Provider/StarWarsContext';

function Filter() {
  const [filterNumericChange, setFilterNumericChange] = useState([]);

  const {
    data: { filters,
      setFilters,
      setPlanetsStarWars,
      planetsStarWarsInitial } } = useContext(StarWarsContext);

  const handleChangeName = ({ target }) => {
    const filterName = planetsStarWarsInitial
      .filter((planet) => planet.name.includes(target.value));

    setPlanetsStarWars(filterName);

    setFilters({ ...filters, filters: { filterByName: { name: target.value } } });
  };

  const handleChangeNumericColunm = ({ target }) => {
    setFilterNumericChange(
      { ...filterNumericChange, column: target.value },
    );
  };

  const handleChangeNumericComparison = ({ target }) => {
    setFilterNumericChange(
      { ...filterNumericChange, comparison: target.value },
    );
  };

  const handleChangeNumericValue = ({ target }) => {
    setFilterNumericChange(
      { ...filterNumericChange, value: target.value },
    );
  };

  const handleClickNumeric = () => {
    const filterNumeric = planetsStarWarsInitial.filter((planet) => {
      if (filterNumericChange.comparison === 'maior que') {
        return planet[filterNumericChange.column] > Number(filterNumericChange.value);
      }
      if (filterNumericChange.comparison === 'menor que') {
        return planet[filterNumericChange.column] < Number(filterNumericChange.value);
      }
      return planet[filterNumericChange.column] === filterNumericChange.value;
    });

    setPlanetsStarWars(filterNumeric);

    console.log([filterNumericChange]);

    setFilters({ ...filters,
      filters: { filterByNumericValues: filterNumericChange } });
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChangeName }
        placeholder="pesquisa por nome"
      />
      <div>
        <select data-testid="column-filter" onChange={ handleChangeNumericColunm }>
          <option value="">-</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleChangeNumericComparison }
        >
          <option value="">-</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="text"
          data-testid="value-filter"
          onChange={ handleChangeNumericValue }
          placeholder="valor"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClickNumeric }
        >
          Adicionar Filtro
        </button>
      </div>
    </form>
  );
}

export default Filter;
