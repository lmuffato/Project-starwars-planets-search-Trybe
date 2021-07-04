import React, { useContext } from 'react';
import context from '../context/context';
import filterNumeric from '../functions';

function Table() {
  const { planets, filters } = useContext(context);
  const { name } = filters.filterByName;
  const { filterByNumericValues } = filters;

  let array = planets;

  // inicio filter by name
  const filterByName = planets.filter((planet) => planet.name.includes(name));

  // condicional com os filters para a variavel array, que define o que será renderizado na tela pelo array.map
  if (name !== '') array = filterByName;

  // inicio filter numeric
  // faço a condicional para saber se o filterByNumericValues foi preenchido, se sim, é sinal de que devo fazer o filterNumeric e ja coloco
  // o resultado dentro do let array
  let filterN = [];
  if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((filter) => {
      filterN = filterNumeric(planets, filter);
    });
    array = filterN;
  }

  // se o array plants ainda estiver vazio quer dizer que a chamada da api ainda nao foi terminada, entao chamo um hz loading
  if (planets === []) return <h2> loading </h2>;

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
