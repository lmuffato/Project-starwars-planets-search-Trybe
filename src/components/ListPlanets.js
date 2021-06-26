import React, { useEffect, useState } from 'react';
import planetsAPI from '../services/planetsAPI';

const ListPlanets = () => {
  const [planets, setData] = useState([]);

  useEffect(() => {
    planetsAPI().then(({ results }) => setData(results));
  }, []);

  return (
    <section>
      {planets.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(planets[0])
                .filter((headers) => (headers !== 'residents'))
                .map((headers) => (
                  <th key={ headers } value={ headers }>{headers}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {planets.length > 0 && planets.map((planet) => (
              <tr key={ planet.name }>
                <td value={ planet.name }>{planet.name}</td>
                <td value={ planet.rotation_period }>{planet.rotation_period}</td>
                <td value={ planet.orbital_period }>{planet.orbital_period}</td>
                <td value={ planet.diameter }>{planet.diameter}</td>
                <td value={ planet.climate }>{planet.climate}</td>
                <td value={ planet.gravity }>{planet.gravity}</td>
                <td value={ planet.terrain }>{planet.terrain}</td>
                <td value={ planet.surface_water }>{planet.surface_water}</td>
                <td value={ planet.population }>{planet.population}</td>
                <td value={ planet.films }>{planet.films}</td>
                <td value={ planet.created }>{planet.created}</td>
                <td value={ planet.edited }>{planet.edited}</td>
                <td value={ planet.url }>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default ListPlanets;
