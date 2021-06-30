import React, { useContext } from 'react';
import PlanetsContext from '../PlanetsContext/PlanetsContext';

function Table() {
  const planetsContext = useContext(PlanetsContext);

  const filteredPlanets = planetsContext.planets
    .filter((filteredPlanet) => (
      filteredPlanet.name
        .includes(planetsContext.filters.filterByName.name)));

  return (
    <table>
      <thead>
        <tr>
          <th> Clima </th>
          <th> Data Criação </th>
          <th> Diâmetro </th>
          <th> Editado </th>
          <th> Filmes </th>
          <th> Gravidade </th>
          <th> Nome </th>
          <th> Período Orbital </th>
          <th> População </th>
          <th> Rotação </th>
          <th> Sup. Água </th>
          <th> Tipo Terra </th>
          <th> URL </th>
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((planet, index) => (
          <tr key={ index }>
            <td key={ planet.name }>
              {planet.climate}
            </td>
            <td>
              {planet.created}
            </td>
            <td>
              {planet.diameter}
            </td>
            <td>
              {planet.edited}
            </td>
            <td>
              {planet.films}
            </td>
            <td>
              {planet.gravity}
            </td>
            <td>
              {planet.name}
            </td>
            <td>
              {planet.orbital_period}
            </td>
            <td>
              {planet.population}
            </td>
            <td>
              {planet.rotation_period}
            </td>
            <td>
              {planet.surface_water}
            </td>
            <td>
              {planet.terrain}
            </td>
            <td>
              {planet.url}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
