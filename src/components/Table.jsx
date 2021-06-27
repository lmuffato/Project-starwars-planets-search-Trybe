import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  // este componente deve ser provido pelo Provider.
  const { dataRead } = useContext(Context); // posso ter x variáveis no mesmo contexto
  // console.log(dataRead);
  // console.log(dataRead[0]);
  // const keys = returnKey(dataRead);
  if (dataRead.length === 0) return <div><h2>Loading...</h2></div>;

  dataRead.forEach((obj) => {
    // const keysFilter = Object.keys(obj);
    delete obj.residents;
  });
  // console.log(dataRead[0]);

  // console.log(data.results);
  // returnKey(obj) {
  //   return Object.keys(obj);
  // }
  const lineTable = (planet) => (
    <tbody>
      <tr key={ planet.name }>
        <td data-testid="planet-name">
          { planet.name }
        </td>
        <td>{planet.rotation_period }</td>
        <td>{planet.orbital_period }</td>
        <td>{planet.diameter }</td>
        <td>{planet.climate }</td>
        <td>{planet.gravity }</td>
        <td>{planet.terrain }</td>
        <td>{planet.surface_water }</td>
        <td>{planet.population }</td>
        <td>{planet.films }</td>
        <td>{planet.created }</td>
        <td>{planet.edited }</td>
        <td><a href={ planet.url }>{planet.url }</a></td>
      </tr>
    </tbody>
  );

  const lineHeadTable = () => (
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
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>Url</th>
      </tr>
    </thead>
  );

  // if (!dataRead) return <div><h2>Loading...</h2></div>;
  return (
    <table>
      {lineHeadTable()}
      {lineTable(dataRead[0])}
    </table>
  );
};

export default Table;
