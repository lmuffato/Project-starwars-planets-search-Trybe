import React from 'react';

function TableBody(planets) {
  return (
    <tr key={ planets.name }>
      <td>{ planets.name }</td>
      <td>{ planets.rotation_period }</td>
      <td>{ planets.orbital_period }</td>
      <td>{ planets.diameter }</td>
      <td>{ planets.climate }</td>
      <td>{ planets.gravity }</td>
      <td>{ planets.terrain }</td>
      <td>{ planets.surface_water }</td>
      <td>{ planets.population }</td>
      <td>{ planets.diameter }</td>
      <td><a href={ planets.films }>{ planets.films }</a></td>
      <td>{ planets.created }</td>
      <td>{ planets.edited }</td>
      <td><a href={ planets.url }>{ planets.url }</a></td>
    </tr>
  );
}

export default TableBody;
