import React, { useContext } from 'react';
import context from '../context/context';

const Table = () => {
  const { data, name } = useContext(context);
  console.log(data);

  const filter = () => {
    const planetSearch = name.toLowerCase();
    let planetList = data;
    if (planetSearch !== '') {
      planetList = data.filter((planet) => (
        planet.name.toLowerCase().includes(planetSearch)
      ));
    }
    return planetList;
    // console.log(planetList)
  };

  return (
    <div className="table-wrapper">
      <h1>Lista de planetas:</h1>
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
          {filter().map((planet, index) => (
            <tr key={ index }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
