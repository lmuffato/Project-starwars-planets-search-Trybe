import React, { useContext } from 'react';
import context from '../context/context';

const Table = () => {
  const { data, dataToUse } = useContext(context);
  console.log(dataToUse.length);
  // console.log(dataToUse);

  const renderTds = (array) => array.map((planet) => (
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
    </tr>
  ));

  return (
    <div className="table-wrapper">
      <h1>Lista de planetas: May the force be with you</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {dataToUse.length === 0 ? renderTds(data) : renderTds(dataToUse)}
          {/* {dataToUse.length === 0 ? console.log('data') : console.log('dataToUse')} */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
