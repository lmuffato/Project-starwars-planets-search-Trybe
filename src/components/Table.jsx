import React, { useContext } from 'react';
import StarWarsContext from '../context/starWarsContext';

function Table() {
  const { planets, names } = useContext(StarWarsContext);
  console.log(planets[0]);
  console.log(names);
  return (
    <table>
      <thead>
        <tr>
          { names.map((planet) => (
            <th key={ planet }>{planet.name}</th>
          )) }
        </tr>
        {/* <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Período de órbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água em superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado em</th>
          <th>Editado em</th>
          <th>URL</th>
        </tr> */}
      </thead>
      <tbody>
        { planets.map((planet) => (
          <tr key={ planet.name }>
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
        )) }
      </tbody>
    </table>
  );
}

export default Table;
