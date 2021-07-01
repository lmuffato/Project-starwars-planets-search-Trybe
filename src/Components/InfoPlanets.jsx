import React from 'react';

const InfoPlanets = ({ planets }) => (
  <tr>
    <td>{planets.name}</td>
    <td>{planets.population}</td>
    <td>{planets.diameter}</td>
    <td>{planets.rotation_period}</td>
    <td>{planets.orbital_period}</td>
    <td>{planets.climate}</td>
    <td>{planets.gravity}</td>
    <td>{planets.terrain}</td>
    <td>{planets.surface_water}</td>
    <td>{planets.created}</td>
    <td>{planets.edited}</td>
    <td>{planets.films}</td>
    <td>{planets.url}</td>
  </tr>
);

export default InfoPlanets;
