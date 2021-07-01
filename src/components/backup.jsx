import React, { useState, useEffect, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

import './tableHeader.css';

function ServiceApi() {
  const { planetsList, setPlanetsList,
    tableColumns, setTableColumns,
  } = useContext(PlanetContext);

  const getPlanets = async () => {
    try {
      const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(urlApi);
      const { results } = await response.json();
      if (results.length !== 0 || results === undefined) {
        setPlanetsList(results);
        setTableColumns(Object.keys(results[0]));
      }
    } catch (error) { console.error(error); }
  };

  // DidMount
  useEffect(() => {
    getPlanets();
  }, []);

  const tableHeaderColumns = () => {
    const selectedColluns = tableColumns.filter((column) => column !== 'edited');
    return (
      <tr>
        {selectedColluns.map((column) => <th key={ column }>{ column }</th>)}
      </tr>
    );
  };

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
    <table>
      <thead>
        { tableHeaderColumns() }
      </thead>
      <tbody>
        {tableRows()}
      </tbody>
    </table>
  );
}

export default ServiceApi;
