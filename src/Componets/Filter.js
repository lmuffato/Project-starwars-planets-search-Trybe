import React, { useContext } from 'react';
import StarWarsContext from '../Provider/StarWarsContext';

function FilterNamePlanet() {
  const {
    data: { filters,
      setFilters,
      setPlanetsStarWars,
      planetsStarWarsInitial } } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    const filterName = planetsStarWarsInitial
      .filter((planet) => planet.name.includes(target.value));

    setPlanetsStarWars(filterName);

    setFilters({ ...filters, filters: { filterByName: { name: target.value } } });
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
        placeholder="pesquisa por nome"
      />
    </div>
  );
}

export default FilterNamePlanet;
