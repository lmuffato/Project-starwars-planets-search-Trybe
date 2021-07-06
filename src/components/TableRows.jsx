import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function TableRows() {
  const {
    planetsList,
    filterByName,
    filters,

    filterByNumericValues,
  } = useContext(PlanetContext);

  console.log(filterByNumericValues);

  // const filterByNumericValues = { 
  //   column: 'population', comparison: 'maior que', value: 0
  // }

  // filterByNumericValues[0].column
  // filterByNumericValues[0].comparison
  // filterByNumericValues[0].value

  const filtredByName = planetsList
    .filter((planet) => planet.name.includes(filterByName));

  // const filtros = () => {
  //   filtredByName.filter((planet, index) => planet.filterByNumericValues.column
  //   === filterByNumericValues.value);
  // };

  // const filtredPlanets = planetsList
  //   .filter((planet) => planet.name.includes(filterByName));

  const tableRows = () => filtredByName
    .map((planet, index) => (
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
        <td>{planet.residents}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        {/* <td>{planet.edited}</td> */}
        <td>{planet.url}</td>
      </tr>
    ));

  return (
    <tbody>
      {console.log(filters)}
      {tableRows()}
    </tbody>
  );
}

export default TableRows;
