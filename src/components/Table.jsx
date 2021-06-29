import React, { useContext } from 'react';
import Context from '../context/Context';

const Table = () => {
  // este componente deve ser provido pelo Provider.
  const { dataRead, dataFilter } = useContext(Context); // posso ter x variáveis no mesmo contexto, estas variaveis ja foram escritas no estado em algum momento
  if (dataRead.length === 0) return <div><h2>Loading...</h2></div>;
  dataRead.forEach((obj) => {
    delete obj.residents;
  });
  const keys = Object.keys(dataRead[0]);

  const lineTable = (planet, index) => (
    <tr key={ index }>
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
  );

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => <th key={ key }>{key.toUpperCase()}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataFilter.length > 0
          ? dataFilter.map((planet, index) => lineTable(planet, index))
          : dataRead.map((planet) => lineTable(planet))}
      </tbody>
    </table>
  );
};

export default Table;
