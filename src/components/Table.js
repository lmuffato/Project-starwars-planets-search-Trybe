import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

/* 1 - Faça uma requisição para o endpoint /planets da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna residents */
function Table() {
  const { query } = useContext(PlanetContext);
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>NAME</th>
          <th>ROTATION PERIOD</th>
          <th>ORBITAL PERIOD</th>
          <th>PLANET DIAMETER</th>
          <th>CLIMATE</th>
          <th>GRAVITY</th>
          <th>TERRAIN</th>
          <th>SURFACE WATER</th>
          <th>POPULATION</th>
          <th>FILMS</th>
          <th>CREATED</th>
          <th>EDITED</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { query.map((planet) => (
          /* - Preenche a tabela com os dados retornados
          - Verifica se a tabela tem 13 colunas
        - Verifica se a tabela tem uma linha para cada planeta retornado */
          <tr key={ planet.name }>
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
      </tbody>
    </table>
  );
}

export default Table;
