import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function RenderDataOfTable(arrayPlanets) {
  let planets = [...arrayPlanets];
  const { name: filterText } = useContext(StarWarsContext);

  if (filterText !== '') {
    planets = arrayPlanets
      .filter(({ name }) => name.toLowerCase().includes(filterText.toLowerCase()));
  }
  const dataRender = planets.map(({
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
    films,
    created,
    edited,
    url,
  }) => (
    <tr key={ name }>
      <td>{ name }</td>
      <td>{ rotationPeriod }</td>
      <td>{ orbitalPeriod }</td>
      <td>{ diameter }</td>
      <td>{ climate }</td>
      <td>{ gravity }</td>
      <td>{ terrain }</td>
      <td>{ surfaceWater }</td>
      <td>{ population }</td>
      <td>{ films[0] }</td>
      <td>{ created }</td>
      <td>{ edited }</td>
      <td>{ url }</td>
    </tr>));
  return dataRender;
}
