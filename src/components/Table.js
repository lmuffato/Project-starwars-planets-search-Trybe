import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

/* 1 - Faça uma requisição para o endpoint /planets da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos da coluna residents */
function Table() {
  const { planets, names } = useContext(PlanetContext);
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          { names.map((planet) => (
            <th key={ planet }>{planet.name}</th>
          )) }
        </tr>
      </thead>
      <tbody>
        { planets.map((planet) => (
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
