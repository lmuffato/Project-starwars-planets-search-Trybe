import React, { useContext } from 'react';
import context from '../context/context';

function Table() {
  // const [isLoading, setIsLoading] = useState(true);
  const { planets, filters } = useContext(context);
  const { name } = filters.filterByName;
  console.log(name);

  const filterByName = planets.filter((planet) => planet.name.includes(name));
  console.log(filterByName);

  let array = [];
  if (name === '') {
    array = planets;
  } else {
    array = filterByName;
  }

  console.log(array);

  // if (isLoading === true) {
  //   console.log(planets);
  //   return <h1>loading</h1>;
  // }
  if (planets === []) {
    return <h2> loading </h2>;
  }

  return (
    <table>
      <tr>
        <th>name</th>
        <th>rotation period</th>
        <th>orbital period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface water</th>
        <th>population</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
        <th>url</th>
      </tr>

      { array.map((planet, index) => (
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

    </table>
  );
}

export default Table;
