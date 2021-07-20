import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function SearchBar() {
  const { search, setSearch,
    handleSearchClick, clearFilter, orderPlanets } = useContext(PlanetsContext);

  const handleSearchText = ({ target: { value } }) => {
    setSearch((prevState) => ({
      filters: {
        ...prevState.filters,
        filterByName: { name: value } },
    }));
  };

  const handleSearchChange = ({ target: { id, value } }) => {
    setSearch((prevState) => ({
      filters: {
        ...prevState.filters,
        filterByNumericValues: [
          {
            ...prevState.filters.filterByNumericValues[0],
            [id]: value,
          },
        ],
      },
    }));
  };

  return (
    <label htmlFor="search">
      Search
      <input
        data-testid="name-filter"
        onChange={ (e) => handleSearchText(e) }
        value={ search.filters.filterByName.name }
      />
      Selectors:
      <select onChange={ handleSearchChange } id="column" data-testid="column-filter">
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        onChange={ handleSearchChange }
        id="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleSearchChange }
        id="value"
        data-testid="value-filter"
        type="number"
      />
      <button
        onClick={ handleSearchClick }
        type="button"
        data-testid="button-filter"
      >
        Filter
      </button>
      <filter data-testid="filter">
        <button type="button" onClick={ clearFilter }>X</button>
      </filter>
      <select
        data-testid="column-sort"
        id="column-sort"
        onChange={ (e) => orderPlanets(e) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </label>
  );
}
