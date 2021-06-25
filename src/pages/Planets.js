import React, { useContext, useEffect } from 'react';
import SwapiTrybe from '../service/swapi-trybe';
import URL_BASE, { URL_PLANETS } from '../const/swapi-trybe';
import Table from '../components/table/Table';
import PlanetsContext from '../global/planets/PlanetsContext';

function Planets() {
  const { planets, setPlanets } = useContext(PlanetsContext);

  function getKeys() {
    if (planets === undefined) return [];
    if (planets.length) {
      return Object.keys(planets[0]);
    }
    return [];
  }

  function getPlanets() {
    if (planets === undefined) return [];
    return planets;
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
      if (setPlanets === undefined) return;
      const response = await loadPlanets().then();
      setPlanets(response);
    };

    setStatePlanets().then();
  }, []);

  return (<Table labels={ getKeys() } data={ getPlanets() } />);
}

export default Planets;
