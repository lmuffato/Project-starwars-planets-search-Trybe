import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, filters } = useContext(MyContext);

  const lineTable = (planet) => (
    <tbody key={ planet.name }>
      <tr>
        <td data-testid="planet-name">
          {planet.name}
        </td>
        <td>{planet.rotation_period}</td>
        <td>{planet.orbital_period}</td>
        <td>{planet.diameter}</td>
        <td>{planet.climate}</td>
        <td>{planet.gravity}</td>
        <td>{planet.terrain}</td>
        <td>{planet.surface_water}</td>
        <td>{planet.population}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        <td>{planet.edited}</td>
        <td><a href={ planet.url }>{planet.url}</a></td>
      </tr>
    </tbody>
  );

  const lineHeadTable = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
    </thead>
  );

  const filterNumeric = () => {
    let planetsFiltered = [];
    if (filters.filterByNumericValues[0].comparison === 'maior que') {
      planetsFiltered = data.filter((planet) => planet[filters
        .filterByNumericValues[0].column] > +filters.filterByNumericValues[0].value);
    } else if (filters.filterByNumericValues[0].comparison === 'menor que') {
      planetsFiltered = data.filter((planet) => planet[filters
        .filterByNumericValues[0].column] < +filters.filterByNumericValues[0].value);
    } else {
      planetsFiltered = data.filter((planet) => planet[filters
        .filterByNumericValues[0].column] === filters.filterByNumericValues[0].value);
    }
    return planetsFiltered;
  };

  const filterPlanets = () => {
    let planetsFiltered = [];
    if (filters.filteredByName.name !== '') {
      planetsFiltered = data.filter((planet) => planet.name.toUpperCase()
        .includes(filters.filteredByName.name.toUpperCase()));
    } else if (filters.filterByNumericValues[0].column !== '') {
      planetsFiltered = filterNumeric();
    } else {
      planetsFiltered = data;
    }
    return planetsFiltered;
  };

  return (
    <table>
      {lineHeadTable()}
      {filterPlanets().map((planet) => lineTable(planet))}
    </table>
  );
}

export default Table;
