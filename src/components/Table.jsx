import React, { useContext, useEffect } from 'react';
import ContextPlanets from '../context/Context';

function Table() {
  const { data } = useContext(ContextPlanets);

  const asd = async () => {
    // await fetchApi();
    console.log(await data);
  };

  useEffect(() => {
    asd();
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Periodo de rotação</th>
          <th>Periodo orbita</th>
          <th>Diametro</th>
          <th>Clima</th>
          <th>Filmes</th>
          <th>População</th>
          <th>Agua na superficie</th>
          <th>Terreno</th>
          <th>Gravidade</th>
          <th>Editado</th>
          <th>Criado</th>
          <th>Redisentes</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => (
          <tr key={ index }>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.films[0]}</td>
            <td>{planet.population}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.gravity}</td>
            <td>{planet.edited}</td>
            <td>{planet.created}</td>
            <td>{planet.residents[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
