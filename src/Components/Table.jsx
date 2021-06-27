import React, { useContext } from 'react';
import planetsContext from '../contexts/planetsContext';

function Table() {
  const { filteredPlanet, theadData } = useContext(planetsContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {theadData.map((header, index) => (
              <th key={ index }>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          { filteredPlanet.map((planet, index) => (
            <tr key={ index }>
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
    </div>
  );
}

export default Table;
