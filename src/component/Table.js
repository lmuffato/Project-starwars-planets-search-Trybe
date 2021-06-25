// Requisito 1 - Cria tabela de planetas
import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import fetchPlanets from '../services/api';

const Table = () => {
  const { data, setData } = useContext(Context);
  useEffect(() => {
    const fetchApi = async () => {
      const dataPlanets = await fetchPlanets();
      setData(dataPlanets);
    };
    fetchApi();
  }, [data, setData]);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Rotação</th>
          <th>Orbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água da superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>Url</th>
        </tr>
      </thead>
      {data.map((planet, index) => (
        <tbody key={ index }>
          <tr>
            <td>
              {planet.name}
            </td>
            <td>
              {planet.rotation_period}
            </td>
            <td>
              {planet.orbital_period}
            </td>
            <td>
              {planet.diameter}
            </td>
            <td>
              {planet.climate}
            </td>
            <td>
              {planet.gravity}
            </td>
            <td>
              {planet.terrain}
            </td>
            <td>
              {planet.surface_water}
            </td>
            <td>
              {planet.population}
            </td>
            <td>
              {planet.films}
            </td>
            <td>
              {planet.created}
            </td>
            <td>
              {planet.edited}
            </td>
            <td>
              {planet.url}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;
