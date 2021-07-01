import React, { useState, useEffect, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

import './tableHeader.css';

function TableRows() {
  const { planetsList, setPlanetsList, planetsFiltred,
    tableColumns, setTableColumns,
  } = useContext(PlanetContext);
// comentario
  const { filtro, setFiltro } = useState();

  const fitro = planetsList.filter((planet) => planet.name.includes('oo'));

  const tableRows = () => planetsList
    .map((planet, index) => (
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
        <td>{planet.residents}</td>
        <td>{planet.films}</td>
        <td>{planet.created}</td>
        {/* <td>{planet.edited}</td> */}
        <td>{planet.url}</td>
      </tr>
    ));

  return (
    <tbody>
      {tableRows()}
    </tbody>
  );
}

export default TableRows;
