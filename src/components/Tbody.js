import React, { useContext } from 'react';
// import { upperFirst } from 'lodash';// Creditos a Rafael Medeiros por essa dica!!!
import context from '../store/Context';

function Tbody() {
  const { data, filter: { filteredByName } } = useContext(context);
  return (
    <tbody>
      {data
        .filter(
          (planet) => planet.name.toLowerCase().includes(filteredByName.toLowerCase()),
        )
        .map((planet) => (
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
        ))}
    </tbody>
  );
}

export default Tbody;
