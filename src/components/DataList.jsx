import '../styles/index.css';
import React from 'react';

export default function DataList({ data }) {
  return (
    data.map((ele, key) => (
      <tr key={ key }>
        <td data-testid="planet-name">{ele.name}</td>
        <td>{ele.rotation_period}</td>
        <td>{ele.orbital_period}</td>
        <td>{ele.diameter}</td>
        <td>{ele.climate}</td>
        <td>{ele.gravity}</td>
        <td>{ele.terrain}</td>
        <td>{ele.surface_water}</td>
        <td>{ele.population}</td>
        <td>{ele.films}</td>
        <td>{ele.created}</td>
        <td>{ele.edited}</td>
        <td>{ele.url}</td>
      </tr>
    )));
}
