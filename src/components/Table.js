import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const MINUS_ONE = -1;

function sortPlanetsName(planets, column, order) {
  // Lógica de .sort consultada na documentação do MDN
  if (column === 'Name') {
    const sortedPlanets = planets.sort((a, b) => {
      if (a.name < b.name) return MINUS_ONE;
      return 1;
    });

    return sortedPlanets;
  }

  if (order === 'ASC') {
    const sortedPlanets = planets.sort((a, b) => Number(a[column]) - Number(b[column]));
    return sortedPlanets;
  }

  if (order === 'DESC') {
    const sortedPlanets = planets.sort((a, b) => Number(b[column]) - Number(a[column]));
    return sortedPlanets;
  }
}

function Table() {
  const { data: { results }, filters } = useContext(PlanetsContext);

  if (!results) return 'Loading...';

  function resultsFilteredByName() {
    const { filterByName: { name } } = filters;
    if (name) {
      return results.filter((planet) => planet.name
        .toLowerCase()
        .includes(name.toLowerCase()));
    }

    return results;
  }

  function filterPlanets(planets, filtersArr) {
    let filteredPlanets = planets;

    if (filtersArr.length > 0) {
      filtersArr.forEach((filter) => {
        const filterColumn = filter.column;
        const filterComparison = filter.comparison;
        const filterValue = Number(filter.value);

        if (filterComparison === 'maior que') {
          filteredPlanets = filteredPlanets
            .filter((planet) => Number(planet[filterColumn]) > filterValue);
        } else if (filterComparison === 'menor que') {
          filteredPlanets = filteredPlanets
            .filter((planet) => Number(planet[filterColumn]) < filterValue);
        } else if (filterComparison === 'igual a') {
          filteredPlanets = filteredPlanets
            .filter((planet) => Number(planet[filterColumn]) === filterValue);
        }
      });
    }
    return filteredPlanets;
  }

  function renderPlanetRows() {
    const filteredPlanets = sortPlanetsName(filterPlanets(
      resultsFilteredByName(),
      filters.filterByNumericValues,
    ), filters.order.column, filters.order.sort);

    return filteredPlanets.map((planet, index) => (
      <tr key={ index }>
        <td data-testid="planet-name">{ planet.name }</td>
        <td>{ planet.rotation_period }</td>
        <td>{ planet.orbital_period }</td>
        <td>{ planet.diameter }</td>
        <td>{ planet.climate }</td>
        <td>{ planet.gravity }</td>
        <td>{ planet.terrain }</td>
        <td>{ planet.surface_water }</td>
        <td>{ planet.population }</td>
        <td>{ planet.films }</td>
        <td>{ planet.created }</td>
        <td>{ planet.edited }</td>
        <td>{ planet.url }</td>
      </tr>
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Rotation Period</th>
          <th scope="col">Orbital Period</th>
          <th scope="col">Diameter</th>
          <th scope="col">Climate</th>
          <th scope="col">Gravity</th>
          <th scope="col">Terrain</th>
          <th scope="col">Surface Water</th>
          <th scope="col">Population</th>
          <th scope="col">Films</th>
          <th scope="col">Created</th>
          <th scope="col">Edited</th>
          <th scope="col">URL</th>
        </tr>
      </thead>
      <tbody>
        { renderPlanetRows() }
      </tbody>
    </table>
  );
}

export default Table;
