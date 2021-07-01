import React, { useState, useEffect } from 'react';
import './App.css';
import MyContext from './context/myContext';
import Home from './pages/home';
import fetchApi from './services/fetchApi';

function App() {
  let ARRAY_FILTRADO;
  const [loadingApi, setLoadingApi] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [] });
  const { filterByName, filterByNumericValues } = filters;
  // requisição á api

  useEffect(() => {
    fetchApi().then((response) => setPlanets(response.results))
      .then(() => setLoadingApi(false));
  }, []);

  // filtro pela searchBar

  useEffect(() => {
    const arrayFiltrado = planets
      .filter((planet) => planet.name.includes(filterByName.name));
    setFilteredPlanets(arrayFiltrado);
  }, [planets, filterByName.name]);

  function setfilterByName(name) {
    setFilters({ ...filters, filterByName: { name } });
  }

  // filtro pelos selects

  function filterBySelect(column, comparison, value) {
    switch (comparison) {
    case 'maior que':
      ARRAY_FILTRADO = (filteredPlanets
        .filter((filteredPlanet) => Number(filteredPlanet[column]) > Number(value)));
      return setFilteredPlanets(ARRAY_FILTRADO);
    case 'menor que':
      ARRAY_FILTRADO = (filteredPlanets
        .filter((filteredPlanet) => Number(filteredPlanet[column])
      < Number(value)));
      return setFilteredPlanets(ARRAY_FILTRADO);
    case 'igual a':
      ARRAY_FILTRADO = (filteredPlanets
        .filter((filteredPlanet) => Number(filteredPlanet[column])
         === Number(value)));
      return setFilteredPlanets(ARRAY_FILTRADO);
    default:
      return planets;
    }
  }

  function filterByNumber(column, comparison, value) {
    setFilters({ ...filters,
      filterByNumericValues: [...filterByNumericValues, { column, comparison, value }] });
    filterBySelect(column, comparison, value);
  }

  return (
    <MyContext.Provider
      value={ { data: filteredPlanets,
        loadingApi,
        filters,
        setfilterByName,
        filterByNumber } }
    >
      <Home />
    </MyContext.Provider>
  );
}

export default App;
