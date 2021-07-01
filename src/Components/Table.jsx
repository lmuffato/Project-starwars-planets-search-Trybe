import React, { useContext } from 'react';
import PlanetsContext from '../Context/planetsContext';
import InfoPlanets from './InfoPlanets';

function Table() {
  const { data } = useContext(PlanetsContext);

  // planets.data.results = array de planetas

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>População</th>
          <th>Diâmetro</th>
          <th>Período de rotação</th>
          <th>Período Orbital</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Bioma</th>
          <th>Parte com agua</th>
          <th>Criada</th>
          <th>Editada</th>
          <th>Filmes</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        {data && data.length > 0 && data.map((planet) => (
          <InfoPlanets
            key={ planet.name }
            planets={ planet }
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
