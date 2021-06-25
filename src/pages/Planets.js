import React, { useContext, useEffect, useState } from 'react';
import SwapiTrybe from '../service/swapi-trybe';
import URL_BASE, { URL_PLANETS } from '../const/swapi-trybe';
import Table from '../components/table/Table';
import PlanetsContext from '../global/planets/PlanetsContext';

function Planets() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  const [search, setSearch] = useState('');

  function filterByName(data, termSearch) {
    const termSearchLowerCase = termSearch.toLowerCase();
    return data.filter(({ name }) => name.toLowerCase().includes(termSearchLowerCase));
  }

  function getKeys() {
    if (planets === undefined || planets.length <= 0) return [];
    return Object.keys(planets[0]);
  }

  function getPlanets() {
    let filteredPlanets = [];
    if (planets === undefined || planets.length <= 0) return [];
    if (search !== '') filteredPlanets = filterByName(planets, search);
    return filteredPlanets.length > 0 ? filteredPlanets : planets;
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
  }, [search]);

  return (
    <>
      <div className="m-4">
        <input
          type="text"
          className="form-control"
          onChange={ (event) => setSearch(event.target.value) }
          data-testid="name-filter"
        />
      </div>
      <Table labels={ getKeys() } data={ getPlanets() } />
    </>
  );
}

export default Planets;
