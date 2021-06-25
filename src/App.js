import React, { useState, useEffect } from 'react';
import './App.css';
import MyContext from './context/myContext';
import Home from './pages/home';
import fetchApi from './services/fetchApi';

function App() {
  const [loadingApi, setLoadingApi] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState({ filterByName: { name: '' } });

  useEffect(() => {
    fetchApi().then((response) => setPlanets(response.results))
      .then(() => setLoadingApi(false));
  }, []);

  useEffect(() => {
    setFilteredPlanets(filters.filterByName.name === '' ? planets : planets
      .filter((planet) => planet.name.includes(filters.filterByName.name)));
  }, [filters, planets]);

  function setfilterByName(name) {
    setFilters({ filterByName: { name } });
  }

  return (
    <MyContext.Provider
      value={{ data: filteredPlanets, loadingApi, filters, setfilterByName }}
    >
      <Home />
    </MyContext.Provider>
  );
}

export default App;
