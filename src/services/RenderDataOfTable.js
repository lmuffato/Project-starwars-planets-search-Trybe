import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import compara from './compara';

const LENGTH_VALUE_1 = 1;
const LENGTH_VALUE_2 = 2;
const LENGTH_VALUE_3 = 3;
const LENGTH_VALUE_4 = 4;
const LENGTH_VALUE_5 = 5;

export default function RenderDataOfTable(arrayPlanets) {
  let planets = [...arrayPlanets];
  let planetsFiltreds = [];

  const { filterByName, filterByNumericValues } = useContext(StarWarsContext);
  const { name: filterText } = filterByName;

  planets = arrayPlanets.filter((planet) => planet.name.toLowerCase()
    .includes(filterText.toLowerCase()));

  switch (filterByNumericValues.length) {
  case 0:
    planetsFiltreds = [...planets];
    break;
  case LENGTH_VALUE_1:
    planetsFiltreds = planets.filter((planet) => {
      const column1 = Object.values(filterByNumericValues[0])[0];
      const comparison1 = Object.values(filterByNumericValues[0])[1];
      const value1 = Object.values(filterByNumericValues[0])[2];
      return compara(planet[column1], comparison1, value1);
    });
    break;
  case LENGTH_VALUE_2:
    planetsFiltreds = planets.filter((planet) => {
      const column1 = Object.values(filterByNumericValues[0])[0];
      const comparison1 = Object.values(filterByNumericValues[0])[1];
      const value1 = Object.values(filterByNumericValues[0])[2];
      const compara1 = compara(planet[column1], comparison1, value1);
      const column2 = Object.values(filterByNumericValues[1])[0];
      const comparison2 = Object.values(filterByNumericValues[1])[1];
      const value2 = Object.values(filterByNumericValues[1])[2];
      const compara2 = compara(planet[column2], comparison2, value2);
      return compara1 && compara2;
    });
    break;
  case LENGTH_VALUE_3:
    planetsFiltreds = planets.filter((planet) => {
      const column1 = Object.values(filterByNumericValues[0])[0];
      const comparison1 = Object.values(filterByNumericValues[0])[1];
      const value1 = Object.values(filterByNumericValues[0])[2];
      const compara1 = compara(planet[column1], comparison1, value1);
      const column2 = Object.values(filterByNumericValues[1])[0];
      const comparison2 = Object.values(filterByNumericValues[1])[1];
      const value2 = Object.values(filterByNumericValues[1])[2];
      const compara2 = compara(planet[column2], comparison2, value2);
      const column3 = Object.values(filterByNumericValues[2])[0];
      const comparison3 = Object.values(filterByNumericValues[2])[1];
      const value3 = Object.values(filterByNumericValues[2])[2];
      const compara3 = compara(planet[column3], comparison3, value3);
      return compara1 && compara2 && compara3;
    });
    break;
  case LENGTH_VALUE_4:
    planetsFiltreds = planets.filter((planet) => {
      const column1 = Object.values(filterByNumericValues[0])[0];
      const comparison1 = Object.values(filterByNumericValues[0])[1];
      const value1 = Object.values(filterByNumericValues[0])[2];
      const compara1 = compara(planet[column1], comparison1, value1);
      const column2 = Object.values(filterByNumericValues[1])[0];
      const comparison2 = Object.values(filterByNumericValues[1])[1];
      const value2 = Object.values(filterByNumericValues[1])[2];
      const compara2 = compara(planet[column2], comparison2, value2);
      const column3 = Object.values(filterByNumericValues[2])[0];
      const comparison3 = Object.values(filterByNumericValues[2])[1];
      const value3 = Object.values(filterByNumericValues[2])[2];
      const compara3 = compara(planet[column3], comparison3, value3);
      const column4 = Object.values(filterByNumericValues[3])[0];
      const comparison4 = Object.values(filterByNumericValues[3])[1];
      const value4 = Object.values(filterByNumericValues[3])[2];
      const compara4 = compara(planet[column4], comparison4, value4);
      return compara1 && compara2 && compara3 && compara4;
    });
    break;
  case LENGTH_VALUE_5:
    planetsFiltreds = planets.filter((planet) => {
      const column1 = Object.values(filterByNumericValues[0])[0];
      const comparison1 = Object.values(filterByNumericValues[0])[1];
      const value1 = Object.values(filterByNumericValues[0])[2];
      const compara1 = compara(planet[column1], comparison1, value1);
      const column2 = Object.values(filterByNumericValues[1])[0];
      const comparison2 = Object.values(filterByNumericValues[1])[1];
      const value2 = Object.values(filterByNumericValues[1])[2];
      const compara2 = compara(planet[column2], comparison2, value2);
      const column3 = Object.values(filterByNumericValues[2])[0];
      const comparison3 = Object.values(filterByNumericValues[2])[1];
      const value3 = Object.values(filterByNumericValues[2])[2];
      const compara3 = compara(planet[column3], comparison3, value3);
      const column4 = Object.values(filterByNumericValues[3])[0];
      const comparison4 = Object.values(filterByNumericValues[3])[1];
      const value4 = Object.values(filterByNumericValues[3])[2];
      const compara4 = compara(planet[column4], comparison4, value4);
      const column5 = Object.values(filterByNumericValues[4])[0];
      const comparison5 = Object.values(filterByNumericValues[4])[1];
      const value5 = Object.values(filterByNumericValues[4])[2];
      const compara5 = compara(planet[column5], comparison5, value5);
      return compara1 && compara2 && compara3 && compara4 && compara5;
    });
    break;
  default:
    planetsFiltreds = [...planets];
  }

  const dataRender = planetsFiltreds.map(({
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
