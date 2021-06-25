import React, { useContext, useEffect, useState } from 'react';
import SwapiTrybe from '../service/swapi-trybe';
import URL_BASE, { URL_PLANETS } from '../const/swapi-trybe';
import Table from '../components/table/Table';
import PlanetsContext from '../global/planets/PlanetsContext';

function Planets() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});

  function handleFilter(event) {
    const { name, value } = event.target;
    setFilters((prevState) => ({ ...prevState, [name]: value }));
  }

  function filterByName(data, termSearch) {
    const termSearchLowerCase = termSearch.toLowerCase();
    return data.filter(({ name }) => name.toLowerCase().includes(termSearchLowerCase));
  }

  function filter(data, filtersTerms) {
    const { filterProperty, cFilter, filterValue } = filtersTerms;
    const filteredPlanets = data.filter((item) => {
      switch (cFilter) {
      case 'maior que':
        return item[filterProperty] > Number(filterValue);
      case 'menor que':
        return item[filterProperty] < Number(filterValue);
      case 'igual a':
        return Number(item[filterProperty]) === Number(filterValue);
      default:
        return item;
      }
    });
    setPlanets(filteredPlanets);
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
  }, [search, filters]);

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            onChange={ (event) => setSearch(event.target.value) }
            data-testid="name-filter"
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4">
          <select
            name="filterProperty"
            className="form-select"
            data-testid="column-filter"
            onChange={ handleFilter }
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </div>
        <div className="col-4">
          <select
            name="cFilter"
            className="form-select"
            data-testid="comparison-filter"
            onChange={ handleFilter }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </div>
        <div className="col-4">
          <input
            type="number"
            name="filterValue"
            className="form-control"
            onChange={ handleFilter }
            data-testid="value-filter"
          />
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="button"
            onClick={ () => filter(planets, filters) }
            data-testid="button-filter"
          >
            Aplicar
          </button>
        </div>
      </div>
      <Table labels={ getKeys() } data={ getPlanets() } />
    </div>
  );
}

export default Planets;
