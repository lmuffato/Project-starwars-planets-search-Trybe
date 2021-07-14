import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../style/table.css';

function Table() {
  const { data, isLoading } = useContext(StarWarsContext);
  console.log(isLoading);
  return (
    <table className="table">
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        { data.map((info) => (
          <tr key={ info.name }>
            <td>{info.name}</td>
            <td>{info.rotation_period}</td>
            <td>{info.orbital_period}</td>
            <td>{info.diameter}</td>
            <td>{info.climate}</td>
            <td>{info.gravity}</td>
            <td>{info.terrain}</td>
            <td>{info.surface_water}</td>
            <td>{info.population}</td>
            <td>{info.films}</td>
            <td>{info.created}</td>
            <td>{info.edited}</td>
            <td>{info.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
