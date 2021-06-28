import React, { useContext } from 'react';
import {
  filters as filterContext,
  data as dataContext,
} from '../../contexts/starWars';

export default function FilterByName() {
  const {
    filters: { filterByName, filterByNumericValues },
  } = useContext(filterContext);
  const {
    planets,
    filteredPlanetsByNumeric,
    setCurrentPlanets,
  } = useContext(dataContext);

  const handleChange = ({ target: { value } }) => {
    filterByName.name = value;

    if (filterByNumericValues.length) {
      setCurrentPlanets(
        filteredPlanetsByNumeric.filter(({ name }) => name
          .toLowerCase()
          .includes(filterByName.name)),
      );
    } else {
      setCurrentPlanets(
        planets.filter(({ name }) => name.toLowerCase().includes(filterByName.name)),
      );
    }
  };

  return (
    <input
      type="text"
      placeholder="Buscar por nome"
      onChange={ handleChange }
      data-testid="name-filter"
    />
  );
}
