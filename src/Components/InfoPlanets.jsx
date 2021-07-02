import React from 'react';
import { objectOf, shape, string, arrayOf } from 'prop-types';

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

InfoPlanets.propTypes = {
  planets: objectOf(shape({
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    films: arrayOf(string),
    created: string,
    edited: string,
    url: string,
  })),
}.isRequired;

export default InfoPlanets;
