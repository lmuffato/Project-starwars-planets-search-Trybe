import React, { useContext } from 'react';
import Context from '../context/Context';
// Requisito 01 realizado com consolta aos PR de Luan Ramalho e Iago Ferreira Turma 10A

function Table() {
  const { dataApi, tableHeader } = useContext(Context);
  // console.log(dataApi);
  // console.log(tableHeader);

  return (
    <table>
      <thead>
        <tr>
          {tableHeader.map((header, index) => (
            <th key={ index }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { dataApi.map((planet, index) => (
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
      </tbody>
    </table>
  );
}

export default Table;
