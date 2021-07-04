import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import FilterContext from '../context/FilterContext';

// Ref: https://github.com/tryber/sd-09-project-starwars-planets-search/pull/55/
const numericFilter = (planets, filterByNumericValues) => {
  filterByNumericValues.forEach(({ column, comparison, value }) => {
    if (comparison === 'maior que') {
      planets = planets.filter((planet) => +planet[column] > +value);
    }
    if (comparison === 'menor que') {
      planets = planets.filter((planet) => +planet[column] < +value);
    }
    if (comparison === 'igual a') {
      planets = planets.filter((planet) => +planet[column] === +value);
    }
  });
  return planets;
};

function Table() {
  const { data } = useContext(DataContext);
  const { filters } = useContext(FilterContext);
  const { filterByName, filterByNumericValues } = filters;
  if (!data.results) return <table />;
  return (
    <table className="table-container">
      <tr className="table-header">
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface_water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
      {numericFilter(data.results, filterByNumericValues)
        .filter(({ name }) => name
          .toLowerCase()
          .includes(filterByName.name))
        .map((planet) => (
          <tr
            className="table-body"
            key={ planet.name }
          >
            <td>{ planet.name }</td>
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
        ))}
    </table>
  );
}

export default Table;
