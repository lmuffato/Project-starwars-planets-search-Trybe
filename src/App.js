import React, { useState, useEffect } from 'react';
import './App.css';
import MyContext from './context/myContext';
import Home from './pages/home';
import fetchApi from './services/fetchApi';

function App() {
  const [loadingApi, setLoadingApi] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues:
      { column: 'population', comparison: 'maior que', value: 0, }
  });
  const { filterByName, filterByNumericValues } = filters;
  // requisição á api

  useEffect(() => {
    fetchApi().then((response) => setPlanets(response.results))
      .then(() => setLoadingApi(false));
  }, []);

  // filtro pela searchBar

  useEffect(() => {
    if (filterByName.name === '' && filterByNumericValues.value === 0) {
      setFilteredPlanets(planets)
    }
    if (filterByName.name !== '' && filterByNumericValues.value === 0) {
      setFilteredPlanets(planets
        .filter((planet) => planet.name.includes(filterByName.name)));
    }
    // if (filterByNumericValues !== 0) {

    // }
  }, [filterByName.name, planets, filterByNumericValues.value]);

  function setfilterByName(name) {
    setFilters({ ...filters, filterByName: { name } });
  }

  // filtro pelos selects

  function filterByNumber(column, comparison, value) {
    setFilters({ ...filters, filterByNumericValues: [{ column, comparison, value, }] })
    filterBySelect();
  };

  function filterBySelect() {
    const { filterByNumericValues } = filters;
    switch (filterByNumericValues.comparison) {
      case 'maior que':
        setFilteredPlanets(filteredPlanets.filter((filteredPlanet) => {
          console.log((Number(filteredPlanet[filterByNumericValues.column]) > Number(filterByNumericValues.value)))
          return Number(filteredPlanet[filterByNumericValues.column]) > Number(filterByNumericValues.value)

        }));
        break;
      case 'menor que':
        setFilteredPlanets(filteredPlanets.filter((filteredPlanet) =>
          filteredPlanet[filterByNumericValues.column] < filterByNumericValues.value
        ));
        break;
      case 'igual a':
        setFilteredPlanets(filteredPlanets.filter((filteredPlanet) =>
          filteredPlanet[filterByNumericValues.column] === filterByNumericValues.value
        ));
        break;
      default:
        return filteredPlanets;
    }
  }

  return (
    <MyContext.Provider
      value={{ data: filteredPlanets, loadingApi, filters, setfilterByName, filterByNumber }}
    >
      <Home />
    </MyContext.Provider>
  );
}

export default App;
