import React, { useContext } from 'react';
import PlanetsContext from '../PlanetsContext/PlanetsContext';

function Table() {
  const planetsList = useContext(PlanetsContext);

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
        {planetsList.map((planet) => (
          <tr key={ planet.name }>
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
