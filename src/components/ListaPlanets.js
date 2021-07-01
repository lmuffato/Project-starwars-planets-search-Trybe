import React, { useContext } from 'react';
import context from '../storeContext/context';
import { cabecalhoHeader } from '../services/fetchApis';
import './ListaPlanets.css';

const ListaPlanets = () => {
  const { data, namePlanet, setNamePlanet } = useContext(context);
  // console.log('planetas ', data);

  const handleNamePlanets = () => (
    <label htmlFor="id-name">
      Name Planet
      {' '}
      <input
        type="text"
        name="name"
        id="id-name"
        // value={ name }
        onChange={
          ({ target }) => setNamePlanet({ filterByName: { name: target.value } })
        }
        placeholder="Name Planet"
        data-testid="name-filter"
      />
    </label>
  );

  const handlePlanets = () => {
    const { filterByName: { name } } = namePlanet;
    return (
      <tbody>
        {data.filter((planet) => planet.name.includes(name))
          .map((planet) => ( // data.length && data.map
            <tr key={ planet.name }>
              <td className="border">{planet.name}</td>
              <td className="border">{planet.climate}</td>
              <td className="border">{planet.created}</td>
              <td className="border">{planet.diameter}</td>
              <td className="border">{planet.edited}</td>
              <td className="border">{planet.films}</td>
              <td className="border">{planet.gravity}</td>
              <td className="border">{planet.orbital_period}</td>
              <td className="border">{planet.population}</td>
              <td className="border">{planet.rotation_period}</td>
              <td className="border">{planet.surface_water}</td>
              <td className="border">{planet.terrain}</td>
              <td className="border">{planet.url}</td>
            </tr>
          ))}
      </tbody>
    );
  };

  return (
    <div>
      {handleNamePlanets()}

      <table className="table_planets">
        <thead>
          <tr>
            {cabecalhoHeader.map((descrição) => (
              <th key={ descrição } value={ descrição }>{descrição}</th>
            ))}
          </tr>
        </thead>
        {handlePlanets()}
      </table>
    </div>
  );
};

export default ListaPlanets;
