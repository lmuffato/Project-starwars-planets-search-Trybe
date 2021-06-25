import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import NameFilters from './NameFilter';

function PlanetsList() {
  const { fetchPlanets, filterName } = useContext(PlanetsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div>
      <div>
        <h1>Planets</h1>
      </div>
      <div>
        <NameFilters />
      </div>
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
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {
            filterName.map((dat, key) => (
              <tr key={ key }>
                <td>{dat.name}</td>
                <td>{dat.rotation_period}</td>
                <td>{dat.orbital_period}</td>
                <td>{dat.diameter}</td>
                <td>{dat.climate}</td>
                <td>{dat.gravity}</td>
                <td>{dat.terrain}</td>
                <td>{dat.surface_water}</td>
                <td>{dat.population}</td>
                <td>{dat.films}</td>
                <td>{dat.created}</td>
                <td>{dat.edited}</td>
                <td>{dat.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default PlanetsList;
