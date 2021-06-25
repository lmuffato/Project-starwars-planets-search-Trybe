// Requisitos 1 e 2, exibe planetas de acordo com o filtro ou não.
import React, { useContext } from 'react';
import Context from '../context/Context';

const Data = () => {
  const { planets: data } = useContext(Context);
  return (
    data.map((planet, index) => (
      <tbody key={ index }>
        <tr>
          <td>
            {planet.name}
          </td>
          <td>
            {planet.rotation_period}
          </td>
          <td>
            {planet.orbital_period}
          </td>
          <td>
            {planet.diameter}
          </td>
          <td>
            {planet.climate}
          </td>
          <td>
            {planet.gravity}
          </td>
          <td>
            {planet.terrain}
          </td>
          <td>
            {planet.surface_water}
          </td>
          <td>
            {planet.population}
          </td>
          <td>
            {planet.films}
          </td>
          <td>
            {planet.created}
          </td>
          <td>
            {planet.edited}
          </td>
          <td>
            {planet.url}
          </td>
        </tr>
      </tbody>
    ))

  );
};

export default Data;
