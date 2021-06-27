import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function RenderDataOfTable(arrayPlanets) {
  let planets = [...arrayPlanets];
  const { filterByName,
    filterByNumericValues,
    clickedButtonFilters } = useContext(StarWarsContext);
  const { name: filterText } = filterByName;
  const {
    column: filterColumn, comparison: filterComparison,
    value: filterValue } = filterByNumericValues[0];

  if (clickedButtonFilters || filterText) {
    planets = arrayPlanets
      .filter((planet) => {
        let numericComparacion;
        switch (filterComparison) {
        case 'maior que':
          numericComparacion = parseFloat(planet[filterColumn]) > parseFloat(filterValue);
          break;
        case 'menor que':
          numericComparacion = parseFloat(planet[filterColumn]) < parseFloat(filterValue);
          break;
        case 'igual a':
          numericComparacion = planet[filterColumn] === filterValue;
          break;
        default:
        }
        if (filterText && !clickedButtonFilters) {
          return planet.name.toLowerCase().includes(filterText.toLowerCase());
        } if (!filterText && clickedButtonFilters) return numericComparacion;
        return planet.name.toLowerCase()
          .includes(filterText.toLowerCase()) && numericComparacion;
      });
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
