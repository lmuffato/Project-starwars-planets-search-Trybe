import React, { useContext, useState, useEffect } from 'react';
import ContextPlanets from '../context/Context';

function Table() {
  const { data, filters: { filterByName: { name } } } = useContext(ContextPlanets);
  const [arr, setArr] = useState(data);

  const filterData = () => {
    console.log(name);
    const res = name.length > 0 ? data
      .filter((planet) => planet.name.includes(name)) : data;
    setArr(res);
  };

  useEffect(() => {
    setArr(data);
  }, [data]);

  useEffect(() => {
    // const filterData = () => {
    //   console.log(name);
    //   const res = name.length > 0 ? data
    //     .filter((planet) => planet.name.includes(name)) : data;
    //   setArr(res);
    // };
    filterData();
  }, [name]);

  return (
    <div>
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
          {arr.map((planet, index) => (
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
    </div>
  );
}

export default Table;
