import React from 'react';
import { objectOf, shape, string, arrayOf } from 'prop-types';

const PlanetInfos = ({ planetData }) => (
  <tr>
    <td>{planetData.name}</td>
    <td>{planetData.population}</td>
    <td>{planetData.diameter}</td>
    <td>{planetData.rotation_period}</td>
    <td>{planetData.orbital_period}</td>
    <td>{planetData.climate}</td>
    <td>{planetData.gravity}</td>
    <td>{planetData.terrain}</td>
    <td>{planetData.surface_water}</td>
    <td>{planetData.created}</td>
    <td>{planetData.edited}</td>
    <td>{planetData.films}</td>
    <td>{planetData.url}</td>
  </tr>
);

PlanetInfos.propTypes = {
  planetData: objectOf(shape({
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

export default PlanetInfos;
