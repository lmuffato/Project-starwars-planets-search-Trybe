import React, { useContext } from 'react';
import StarWarsContext from '../Provider/StarWarsContext';

function Table() {
  const { data: { planetsStarWars } } = useContext(StarWarsContext);
  // const id = 0;
  const planets = planetsStarWars;

  return (
    <div>
      { planets ? console.log(planets) : console.log('Carregando')}
      {/* <ul>
        {
          planets ? Object.values(planets).map((planet) => (
            <li>{ planet.name }</li>
          )) : <h1>Carregando</h1>
        }
      </ul> */}

      <table>
        <thead>
          <tr>
            <th>climate</th>
            <th>created</th>
            <th>diameter</th>
            <th>edited</th>
            <th>films</th>
            <th>gravity</th>
            <th>name</th>
            <th>orbital_period</th>
            <th>population</th>
            <th>residents</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
          </tr>
        </thead>
        <tbody>
          {
            planets ? Object.values(planets).map((planet) => (
              <tr key={ planet.value }>
                <td>{ planet.climate }</td>
                <td>{ planet.created }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.films.length }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.name }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.population }</td>
                <td>{ planet.residents.length }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.terrain }</td>
              </tr>
            )) : <h4>Carregando</h4>
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
