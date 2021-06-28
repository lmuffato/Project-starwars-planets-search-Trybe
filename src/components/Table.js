import React, { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, getElements } = useContext(MyContext);
  console.log(data);
  const colunas = data[0] && Object.keys(data[0]);

  useEffect(() => {
    getElements();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {data[0] && colunas.map((header) => (
            <th key={ Math.random() * 100 }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { data.map((datas, index) => (
          <tr key={ index }>
            <td>{datas.name}</td>
            <td>{datas.rotation_period}</td>
            <td>{datas.orbital_period}</td>
            <td>{datas.diameter}</td>
            <td>{datas.climate}</td>
            <td>{datas.gravity}</td>
            <td>{datas.terrain}</td>
            <td>{datas.surface_water}</td>
            <td>{datas.population}</td>
            <td>{datas.films}</td>
            <td>{datas.created}</td>
            <td>{datas.edited}</td>
            <td>{datas.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
// Explicação do GUilherme t10A.
