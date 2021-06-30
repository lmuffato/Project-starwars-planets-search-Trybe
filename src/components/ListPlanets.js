import React, { useContext } from 'react';
import context from '../context/context';
import FormFilter from './FormFilter';

const ListPlanets = () => {
  const { filteredPlanet } = useContext(context);

  return (
    <section>
      <FormFilter />
      <section>
        {filteredPlanet.length > 0 && (
          <table>
            <thead>
              <tr>
                {Object.keys(filteredPlanet[0])
                  .filter((headers) => (headers !== 'residents'))
                  .map((header, index) => (
                    <th key={ index } value={ header }>{header}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {filteredPlanet.length > 0 && filteredPlanet.map((planet) => (
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
    </section>
  );
};

export default ListPlanets;
