import React, { useEffect, useState } from 'react';
import SwapiTrybe from '../service/swapi-trybe';
import URL_BASE, { URL_PLANETS } from '../const/swapi-trybe';
import Table from '../components/table/Table';

function Planets() {
  const [planets, setPlanets] = useState([]);

  function getKeys() {
    if (planets.length) {
      return Object.keys(planets[0]);
    }
    return [];
  }

  function removeResidents(data) {
    const planetsWithoutResidents = [];
    data.forEach((planet) => {
      delete planet.residents;
      planetsWithoutResidents.push(planet);
    });
    return planetsWithoutResidents;
  }

  async function loadPlanets() {
    const api = new SwapiTrybe();
    const { results } = await api.getPlanets(URL_BASE, URL_PLANETS);
    return removeResidents(results);
  }

  useEffect(() => {
    const setStatePlanets = async () => {
      const response = await loadPlanets().then();
      setPlanets(response);
    };

    setStatePlanets().then();
  }, []);

  return (
    <Table labels={ getKeys() } data={ planets } />
  );
}

export default Planets;
