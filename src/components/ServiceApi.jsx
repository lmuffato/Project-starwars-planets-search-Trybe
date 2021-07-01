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

  return (
    null
  );
}

export default ServiceApi;
