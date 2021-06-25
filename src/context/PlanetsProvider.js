import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ filterByName: { name: '' } });
  const [newArray, setNewArray] = useState([]);

  async function fetchPlanet() {
    const fetchApi = await fetch('https://swapi.dev/api/planets');
    const result = await fetchApi.json();
    result.results.map((planets) => delete planets.residents);
    setData(result);
    setNewArray(result.results);
    setIsLoading(false);
  }

  async function filterName(cname) {
    const filterPlanetName = -1;
    setFilter({ ...filter, ...{ filterByName: { name: cname } } });
    const newValue = data.results.filter((planet) => (
      planet.name.indexOf(cname) !== filterPlanetName));
    setNewArray(newValue);
  }

  return (
    <PlanetsContext.Provider
      value={
        { data, isLoading, filter, fetchPlanet, filterName, newArray }
      }
    >
      {children}
    </PlanetsContext.Provider>
  );
}
PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
