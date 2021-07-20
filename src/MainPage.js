import React, { useContext } from 'react';
import StarWarsContext from './context/StarWarsContext';
import SearchBar from './utils/SearchBar';
import FilterForms from './utils/FilterForms';

function MainPage() {
  const { filteredPlanets, loaded } = useContext(StarWarsContext);
  console.log('Planetas do mainpage', filteredPlanets);

  return (
    <div>
      {loaded
        ? (
          <div>
            <span>Hello, App!</span>
            <SearchBar />
            <FilterForms />
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
                  <th>Created</th>
                  <th>Edited</th>
                  <th>Films</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlanets.map((planet, index) => (
                  <tr key={ index }>
                    <td data-testid="planet-name">{planet.name}</td>
                    <td>{planet.rotation_period}</td>
                    <td>{planet.orbital_period}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.climate}</td>
                    <td>{planet.gravity}</td>
                    <td>{planet.terrain}</td>
                    <td>{planet.surface_water}</td>
                    <td>{planet.population}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>) : <div>Loading</div>}
    </div>
  );
}

export default MainPage;
