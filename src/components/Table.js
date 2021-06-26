import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  const { filteredPlanets, filters } = useContext(Context);

  if (!filteredPlanets) return (<p>Loading</p>);

  // Source: https://github.com/tryber/sd-09-project-starwars-planets-search/tree/tiago-yoneda-project-starwars-planet-search
  const planetsList = (planet) => (
    <tr key={ planet.name }>
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
  );

  return (
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
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {
          // Source: https://github.com/tryber/sd-09-project-starwars-planets-search/tree/tiago-yoneda-project-starwars-planet-search
          filteredPlanets
            .filter((planet) => planet.name.includes(filters.filterByName.name))
            .map((planet) => (
              planetsList(planet)
            ))
        }
      </tbody>
    </table>
  );
};

export default Table;
