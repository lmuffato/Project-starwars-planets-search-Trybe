import React, { useContext, useEffect } from 'react';
import PlanetContext from '../Context/PlanetContext';
import FilteringPlanets from './PlanetsFilter';
import SortByColumn from './SortByColumn';

export default function Table() {
  const { data, newData, setData, setNewData } = useContext(PlanetContext);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((result) => result.json())
      .then((json) => {
        setData(json.results);
        setNewData(json.results);
      });
  });

  const filteringPlanetsName = ({ target }) => {
    const filtered = data.filter(({ name }) => name.toUpperCase()
      .includes(target.value.toUpperCase()));
    setNewData(filtered);
  };

  if (data.length === 0) return <h2>Loading...</h2>;

  return (
    <div>
      <label htmlFor="planet">
        Search:
        <input
          type="text"
          id="planet"
          onChange={ filteringPlanetsName }
          data-testid="name-filter"
        />
      </label>
      <FilteringPlanets />
      <SortByColumn />
      <table>
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
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
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
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
